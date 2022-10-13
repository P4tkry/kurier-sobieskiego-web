import {useEffect, useState} from "react";
import {IArticle} from "../models";
import api from "../utils/api";
import Pagination from "../components/Pagination";
import ArticleBox from "../components/ArticleBox";

export default function Articles(){
    const [paging, setPaging] = useState<{page: number, pagesNumber: number}>({page: 1, pagesNumber: 1});
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [articlesType, setArticlesType ] = useState<"wywiad"|"sport"|"muzyka"|"książki"|"filmy"|"społeczne"|"ekologia"|"sztuka"|"historia"|"lifestyle"|"wszystkie">("wszystkie");

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
    },[articlesType, paging.page]);

    return(
        <div className={'margin'}>

            <div className={'flex border-b-2 mb-4 mt-10 border-gray-400 gap-1'}>
                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='wywiad'&&'ring-2'}`} onClick={()=>setArticlesType("wywiad")}>
                    wywiady
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='sport'&&'ring-2'}`} onClick={()=>setArticlesType("sport")}>
                    sport
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='muzyka'&&'ring-2'}`} onClick={()=>setArticlesType("muzyka")}>
                    muzyka
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='książki'&&'ring-2'}`} onClick={()=>setArticlesType("książki")}>
                    książki
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='filmy'&&'ring-2'}`} onClick={()=>setArticlesType("filmy")}>
                    filmy
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='społeczne'&&'ring-2'}`} onClick={()=>setArticlesType("społeczne")}>
                    społeczne
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='ekologia'&&'ring-2'}`} onClick={()=>setArticlesType("ekologia")}>
                    ekologia
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='sztuka'&&'ring-2'}`} onClick={()=>setArticlesType("sztuka")}>
                    sztuka
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='historia'&&'ring-2'}`} onClick={()=>setArticlesType("historia")}>
                    historia
                </button>

                <button className={`rounded-t-lg px-2 ring-gray-400 ${articlesType==='lifestyle'&&'ring-2'}`} onClick={()=>setArticlesType("lifestyle")}>
                    lifestyle
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