import {Formik, Form} from "formik";
import {Input} from "../components/FormAssets";
import * as Yup from 'yup';
import api from "../utils/api";
import cookies from "../utils/cookies";
import { useNavigate } from 'react-router-dom';

export default function Login(props: {login: ()=>void}) {
    const navigate = useNavigate();
    return (
        <div className={'margin my-8 font-roboto'}>
            <Formik initialValues={{username: '', password: ''}}
                    validationSchema={Yup.object({
                        username: Yup.string().required('Wypełnij to pole'),
                        password: Yup.string().required('Wypełnij to pole'),
                    })}

                    onSubmit={async (values, formikHelpers) => {
                        console.log(values);
                        const response = await api.post('users/login', {body: JSON.stringify(values)});
                        if (!response.ok) {
                            return formikHelpers.setErrors({
                                username: "Niewłaściwe dane logowanie",
                                password: "Niewłaściwe dane logowanie"
                            })
                        }
                        const responseJSON = await response.json();
                        cookies.add('auth',responseJSON.auth, 30);
                        navigate('/adminPanel');
                        props.login();
                    }}>
                {
                    formikProps => (
                        <Form className={'flex flex-col gap-2 bg-neutral-800 px-5 py-5 rounded'}>
                            <span className="text-9xl ml-auto mr-auto material-icons-round">
                                account_circle
                            </span>
                            <h1 className={'text-center text-2xl mb-2 font-ropa-sans '}>
                                Logowanie do panelu redakcyjnego
                            </h1>
                            <Input placeholder={'login'} name={'username'} type={'text'} formik={formikProps}/>
                            <Input placeholder={'hasło'} name={'password'} type={'password'} formik={formikProps}/>
                            <button type={'submit'}
                                    className={'btn bg-neutral-500 ml-auto mr-auto ring-sky ring-neutral-600 mt-2'}>
                                Zaloguj się
                            </button>
                        </Form>
                    )
                }


            </Formik>
        </div>
    )
}