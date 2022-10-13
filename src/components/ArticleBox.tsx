import {IArticle} from "../models";
import {Link} from 'react-router-dom'
import dateFormatter from "../utils/dateFormatter";
import he from "he";
import stripTags from "striptags";

function removeHTML(data: string) {
    return he.decode(stripTags(data))
}

export default function ArticleBox(props: { article: IArticle, index: number, className?: string }) {
    return (
        <Link to={`/article/${props.article._id}`}>
            <div
                className={`flex flex-wrap bg-neutral-800 sm:flex-nowrap w-full h-[210px] hover:shadow-neutral-800 hover:shadow-lg rounded ${props.className}`}
                key={`article-${props.index}`}>
                <img src={props.article.thumbnail} className={'object-cover w-[350px] rounded-l '}/>
                <div
                    className={' py-3 px-4 border-r border-t border-b border-neutral-700 rounded-r flex flex-col w-full'}>
                    <p className={'font-ropa-sans text-sm mb-1 text-neutral-300'}>
                        {
                            props.article.author
                        }
                        {
                            ", "
                        }
                        <span className={'text-neutral-400'}>
                        {
                            dateFormatter(new Date(parseInt(props.article._id.substring(0, 8), 16) * 1000))
                        }
                    </span>
                    </p>

                    <h3 className={'text-3xl cursor-pointer mb-1 uppercase'}>
                        {
                            props.article.title.split(' ').slice(0,5).join(' ')
                        }
                        {
                            props.article.title.split(' ').length > 5 && "..."
                        }
                    </h3>

                    <p className={'text-sm'}>
                        {
                            props.article.description
                        }

                    </p>

                    <div className={'mt-auto mb-auto flex gap-1 items-center text-neutral-400'}>
                    <span className="material-symbols-outlined">
                        schedule
                    </span>
                        <p>
                            {
                                Math.ceil(removeHTML(props.article.content).split(" ").length / 200)
                            }
                            {
                                Math.ceil(removeHTML(props.article.content).split(" ").length / 200) === 1 ? " minuta czytania" : Math.ceil(removeHTML(props.article.content).split(" ").length / 200) > 4 ? " minut czytania" : "minuty czytania"
                            }
                        </p>

                    </div>

                    <div className={'flex gap-2 mb-2 flex-wrap mt-auto'}>
                        {
                            props.article.tags.map((tag, index) => {
                                return (
                                    <div className={'text-xs px-2 py-0.5 rounded bg-neutral-600 font-ropa-sans'}>
                                        {
                                            tag
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}