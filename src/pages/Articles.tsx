import {useEffect, useState} from "react";
import {IArticle} from "../models";
import api from "../utils/api";
import Pagination from "../components/Pagination";
import ArticleBox from "../components/ArticleBox";
import {useParams} from "react-router-dom";

export default function Articles() {
    const {type} = useParams();
    const [paging, setPaging] = useState<{ page: number, pagesNumber: number }>({page: 1, pagesNumber: 1});
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [loadingArticles, setLoadingArticles] = useState<boolean>(false);

    async function getArticles() {
        const response = await api.get(`articles?page=${paging.page}&count=5&sortByDate=-1${type !== 'wszystkie' ? `&hasTag=${type}` : ''}`);
        if (!response.ok)
            return
        const responseJSON = await response.json();
        setArticles(responseJSON.content);
        setPaging({...paging, pagesNumber: responseJSON.numberOfPages});
        setLoadingArticles(false);
    }

    useEffect(() => {
        setLoadingArticles(true);
        getArticles();
    }, [type, paging.page]);

    return (
        <div className={'margin py-5'}>
            {
                !loadingArticles &&
                <div className={'flex justify-center'}>
                    <Pagination paging={paging} setPaging={setPaging}/>
                </div>
            }
            {
                loadingArticles ?
                    <div className={'w-full mt-10 flex flex-col gap-4 items-center justify-center'}>
                        <div className={'w-full bg-neutral-600 rounded px-5 py-2 gap-2 flex flex-wrap'}>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                        </div>

                        <div className={'w-full bg-neutral-600 rounded px-5 py-2 gap-2 flex flex-wrap'}>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                        </div>

                        <div className={'w-full bg-neutral-600 rounded px-5 py-2 gap-2 flex flex-wrap'}>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                        </div>

                        <div className={'w-full bg-neutral-600 rounded px-5 py-2 gap-2 flex flex-wrap'}>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                        </div>

                        <div className={'w-full bg-neutral-600 rounded px-5 py-2 gap-2 flex flex-wrap'}>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/5 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/3 bg-neutral-700 rounded animate-pulse'}/>
                            <div className={'h-5 w-1/2 bg-neutral-700 rounded animate-pulse'}/>
                        </div>
                    </div> :
                    articles.map((article, index) => {
                        return (
                            <ArticleBox article={article} index={index} className={'my-4'} key={`${article._id}-${index}`}/>
                        )
                    })
            }

        </div>
    )
}