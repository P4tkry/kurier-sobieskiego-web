import {IArticle} from "../../models";
import {Link} from "react-router-dom";
import api from "../../utils/api";
function removeHTML(data: string) {
    return data.replaceAll(/(<([^>]+)>)/ig, '');
}

export default function AdminArticle(props: {article: IArticle, index: number, reFetchArticles: ()=>void}) {
    async function removeArticle(){
        const response = await api.delete(`articles/${props.article._id}`);
        if(response.ok)
            props.reFetchArticles();
    }
    return (
        <div className={'flex flex-wrap lg:flex-nowrap w-full'} key={`article-${props.article._id}`}>
            <img src={props.article.thumbnail} className={'object-cover h-[200px] w-full lg:h-auto lg:w-[200px] rounded-t lg:rounded-r-none lg:rounded-l '}/>
            <div
                className={' py-3 px-4 border-l lg:border-l-0 border-r lg:border-t border-b border-neutral-700 rounded-b lg:rounded-r lg:rounded-l-none flex flex-col bg-neutral-800 w-full'}>
                <h1 className={'text-2xl pb-1'}>
                    {
                        props.article.title
                    }
                </h1>

                <p className={'text-sm'}>
                    {
                        removeHTML(props.article.content).slice(0, 120)
                    }
                    {
                        removeHTML(props.article.content).length > 120 && '...'
                    }
                </p>
                <div className={'flex gap-2 pt-2 flex-wrap'}>
                    {
                        props.article.tags.map((tag, index) => {
                            return (
                                <div className={'bg-neutral-600 text-xs px-1 py-0.5 rounded'} key={`tag-${index}`}>
                                    {
                                        tag
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <div className={'flex gap-2 mt-2 flex gap-2 ml-auto'}>

                    <Link to={`edit/${props.article._id}`}>
                        <button className={'btn flex gap-1 items-center bg-sky-600 ring-sky-300'}>
                            <span className="material-icons-outlined">
                                edit
                                </span>
                            Edytuj
                        </button>
                    </Link>

                    <button className={'btn flex gap-1 items-center bg-red-600 ring-red-300'} onClick={removeArticle}>
                    <span className="material-icons-outlined">
                        delete
                            </span>
                        usuń
                    </button>
                </div>


            </div>
        </div>
    )
}