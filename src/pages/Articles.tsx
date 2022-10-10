import {useEffect, useState} from "react";
import {IArticle} from "../models";
import api from "../utils/api";
import Pagination from "../components/Pagination";
import ArticleBox from "../components/ArticleBox";

export default function Articles(){
    const [paging, setPaging] = useState<{page: number, pagesNumber: number}>({page: 1, pagesNumber: 1});
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [articlesType, setArticlesType ] = useState<"wywiad"|"naukowy"|"wszystkie">("wszystkie");

    async function getArticles() {
        const response = await api.get(`articles?page=${paging.page}&count=5&sortByDate=1${articlesType!=='wszystkie'?`&hasTag=${articlesType}`:''}`);
        if (!response.ok)
            return
        const responseJSON = await response.json();
        setArticles(responseJSON.content);
        setPaging({...paging, pagesNumber: responseJSON.numberOfPages});
    }

    useEffect(() =>{
        getArticles();
    },[articlesType]);

    return(
        <div className={'margin'}>

            <div className={'flex border-b-2 mb-4 mt-10 border-gray-400 gap-1'}>
                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='wywiad'&&'ring-2'}`} onClick={()=>setArticlesType("wywiad")}>
                    wywiady
                </button>
                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='naukowy'&&'ring-2'}`} onClick={()=>setArticlesType("naukowy")}>
                    naukowe
                </button>
                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='wszystkie'&&'ring-2'}`} onClick={()=>setArticlesType("wszystkie")}>
                    wszystkie
                </button>
            </div>
            <div className={'flex justify-center'}>
                <Pagination paging={paging} setPaging={setPaging} />
            </div>
            {
                articles.map((article, index) =>{
                    return(
                        <ArticleBox article={article} index={index} className={'my-4'} />
                    )
                })
            }

        </div>
    )
}