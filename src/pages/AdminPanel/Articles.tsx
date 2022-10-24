import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {IArticle} from "../../models";
import api from "../../utils/api";
import AdminArticle from "./AdminArticle";
import Pagination from "../../components/Pagination";

export default function Articles(){


    const [paging, setPaging] = useState<{page: number, pagesNumber: number}>({page: 1, pagesNumber: 1});
    const [articles, setArticles] = useState<IArticle[]>([]);

    async function getArticles() {
        const response = await api.get(`articles?page=${paging.page}&count=5&sortByDate=-1`);
        if (!response.ok)
            return
        const responseJSON = await response.json();
        setArticles(responseJSON.content);
        setPaging({...paging, pagesNumber: responseJSON.numberOfPages});

    }

    useEffect(() => {
        getArticles();
    }, [paging.page]);

    return(
        <div className={'margin flex flex-col gap-5 py-5 items-center'}>

            <div className={'flex flex-col items-center'}>
                <h1 className={'text-4xl text-center'}>
                    Panel redakcyjny
                </h1>
            </div>
            <Pagination paging={paging} setPaging={setPaging} />

            <div className={'flex w-full'}>
                <Link to={'createArticle'} className={'ml-auto'}>
                    <button className={'btn bg-sky-600 ring-sky-300 flex items-center gap-1'}>
                    <span className="material-icons-outlined">
                        add
                    </span>
                        Utwórz artykuł
                    </button>
                </Link>
            </div>
            {
                articles.map((article, index) => {
                    return <AdminArticle article={article} index={index} reFetchArticles={getArticles} />
                })
            }
        </div>
    )
}