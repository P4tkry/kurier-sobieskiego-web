import {useEffect, useState} from "react";
import {IArticle} from "../models";
import api from "../utils/api";
import Pagination from "../components/Pagination";
import ArticleBox from "../components/ArticleBox";
import {useParams} from "react-router-dom";

export default function Articles(){
    const { type }= useParams();
    const [paging, setPaging] = useState<{page: number, pagesNumber: number}>({page: 1, pagesNumber: 1});
    const [articles, setArticles] = useState<IArticle[]>([]);

    async function getArticles() {
        const response = await api.get(`articles?page=${paging.page}&count=5&sortByDate=1${type!=='wszystkie'?`&hasTag=${type}`:''}`);
        if (!response.ok)
            return
        const responseJSON = await response.json();
        setArticles(responseJSON.content);
        setPaging({...paging, pagesNumber: responseJSON.numberOfPages});
    }

    useEffect(() =>{
        getArticles();
    },[type, paging.page, type]);

    return(
        <div className={'margin py-5'}>

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