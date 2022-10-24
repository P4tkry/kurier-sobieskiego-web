import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ErrorMessage, Form, Formik} from "formik";
import {IArticle} from "../../../models";
import api from "../../../utils/api";
import {Input} from "../../../components/FormAssets";
import {Editor} from "@tinymce/tinymce-react";
import config from "../../../config.json";
import Tags from "./Tags";
import FileUpload from "../../../components/FileUpload";
import * as Yup from 'yup';

export default function EditArticle(props: { type: 'create' | 'edit' }) {
    let {id} = useParams();
    const [article, setArticle] = useState<IArticle| undefined | 'create'>(props.type==='create'?'create':undefined);
    const navigate = useNavigate();
    async function getArticle() {
        const response = await api.get(`articles/${id}`);
        if (response.ok) {
            const responseJSON = await response.json();
            setArticle(responseJSON);
        }
    }

    useEffect(() => {
        if (props.type === 'edit') {
            getArticle();
        }
    }, []);

    return (
        <div className={'margin py-5 flex flex-col items-center'}>
            {
                article !== undefined && <Formik
                validationSchema={Yup.object({
                    title: Yup.string().required('Wypełnij to pole'),
                    content: Yup.string().required('Wypełnij to pole'),
                    author: Yup.string().required('Wypełnij to pole'),
                })}
                    initialValues={
                    props.type === 'edit' && article !== 'create' ? {
                        author: article?.author,
                        content: article?.content,
                        tags: article?.tags,
                        description: article?.description,
                        title: article?.title,
                        thumbnail: article?.thumbnail
                    } : {
                        author: '',
                        content: '',
                        description: '',
                        tags: [],
                        title: '',
                        thumbnail: ''
                    }
                } onSubmit={async (values, formikHelpers) => {
                        if (!values.thumbnail)
                            return formikHelpers.setFieldError('image', 'Musisz podać zdjęcie');
                        let image;
                        if (typeof values.thumbnail !== 'string') {
                            const formData = new FormData();
                            formData.append('file', values.thumbnail);
                            const response = await api.post('files', {
                                body: formData,
                                headers: {
                                    "type": "multipart/form-data"
                                }
                            });
                            if(!response.ok)
                                return
                            const responseJSON = await response.json();
                            image = config.backendURL+'/files/'+responseJSON.name;
                        } else {
                            image = values.thumbnail;
                        }
                        let news = {
                            title: values.title,
                            content: values.content,
                            thumbnail: image,
                            author: values.author,
                            tags: values.tags,
                            description: values.description
                        };

                        if(props.type === 'edit' && article !== 'create'){
                            const response = await api.patch(`articles/${article?._id}`, {body: JSON.stringify(news)});
                            if(response.ok)
                                return navigate('/adminPanel')
                        }else{
                            const response = await api.post(`articles`, {body: JSON.stringify(news)});
                            if(response.ok)
                                return navigate('/adminPanel')
                        }


                }}>
                    {
                        fProps => (
                            <Form className={'flex items-center flex-col gap-4'}>

                                <div className={'w-2/3 sm:w-1/2 '}>
                                    <div>
                                        <label>
                                            Tytuł
                                        </label>
                                        <Input type={'text'} name={'title'} formik={fProps} placeholder={'Tytuł'}/>
                                    </div>

                                    <div>
                                        <label>
                                            Autor
                                        </label>
                                        <Input type={'text'} name={'author'} formik={fProps} placeholder={'Autor'}/>
                                    </div>

                                    <div>
                                        <label>
                                            Opis
                                        </label>
                                        <Input type={'text'} name={'description'} formik={fProps} placeholder={'Opis'}/>
                                    </div>

                                </div>

                                <FileUpload name={'thumbnail'} formik={fProps} labelText={'miniaturka'} imgClass={'w-[250px] h-[150px]'}/>

                                <div>
                                    <p className={'text-center mb-1'}>
                                        Tagi
                                    </p>
                                <Tags tags={fProps.values.tags} setTags={(tags)=>{
                                    fProps.setFieldValue('tags', tags);
                                }} />
                                </div>

                                <div>
                                    <div
                                        className={`${fProps.errors.content && fProps.touched.content && 'ring-1 ring-red-600 rounded'}`}>
                                        <Editor

                                            initialValue={fProps.initialValues.content}
                                            tinymceScriptSrc={`${window.location.protocol + "//"+ window.location.host}/tinymce/tinymce.min.js`}

                                            onEditorChange={(value) => {
                                                fProps.setFieldValue('content', value);
                                            }}
                                            init={{
                                                images_upload_handler: async (blobInfo, progress)=>{
                                                    const formData = new FormData();
                                                    formData.append('file', blobInfo.blob());
                                                    const response = await api.post('files', {
                                                        body: formData,
                                                        headers: {
                                                            "type": "multipart/form-data"
                                                        }
                                                    });
                                                    if(!response.ok)
                                                        return ''
                                                    const responseJSON = await response.json();
                                                    return `${config.backendURL}/files/`+responseJSON.name;
                                                },
                                                height: 700,
                                                images_file_types: 'jpg,svg,png',
                                                plugins: [
                                                    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                                                    'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
                                                    'table', 'emoticons', 'template', 'help', 'directionality'
                                                ],
                                                images_upload_url: `${config.backendURL}/files`,

                                                toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                                                    'forecolor backcolor emoticons | help',

                                                menubar: 'favs file edit view insert format tools table help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                                            }}
                                        />
                                    </div>
                                    {
                                        fProps.touched.content && fProps.errors.content &&
                                        <label className={'text-xs ml-2 text-red-600 mt-1'}>
                                            <ErrorMessage name="content"/>
                                        </label>
                                    }
                                </div>
                                <button type={'submit'} className={'btn ring-sky-300 bg-sky-600'}>
                                    Zapisz
                                </button>

                            </Form>
                        )
                    }
                </Formik>
            }
        </div>
    )
}