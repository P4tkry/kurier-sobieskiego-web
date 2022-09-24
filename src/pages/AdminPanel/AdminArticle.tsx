import {IArticle} from "../../models";
import {Link} from "react-router-dom";
function removeHTML(data: string) {
    return data.replaceAll(/(<([^>]+)>)/ig, '');
}
export default function AdminArticle(props: {article: IArticle, index: number}) {
    return (
        <div className={'flex flex-wrap sm:flex-nowrap w-fit'} key={`article-${props.index}`}>
            <img src={props.article.thumbnail} className={'object-cover h-[150px] w-[200px] rounded-l '}/>
            <div
                className={' py-3 px-4 border-r border-t border-b border-neutral-700 rounded-r flex flex-col bg-neutral-800'}>
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
                                <div className={'bg-neutral-600 text-xs px-1 py-0.5 rounded'}>
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
                        <button className={'btn flex gap-1 text-xs items-center bg-sky-600 ring-sky-300'}>
                            <span className="material-icons-outlined text-xs">
                                edit
                                </span>
                            Edytuj
                        </button>
                    </Link>

                    <button className={'btn flex gap-1 text-xs items-center bg-red-600 ring-red-300'}>
                    <span className="material-icons-outlined text-xs">
                        delete
                            </span>
                        usuń
                    </button>
                </div>


            </div>
        </div>
    )
}