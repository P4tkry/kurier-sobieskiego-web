import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {IArticle} from "../../models";
import api from "../../utils/api";
import AdminArticle from "./AdminArticle";

export default function Articles(){


    const [pagination, setPaging] = useState<{ pages: number, selectedPage: number }>({pages: 5, selectedPage: 1});
    const [articles, setArticles] = useState<IArticle[]>([]);

    async function getArticles() {
        const response = await api.get(`articles?page=${pagination.selectedPage}&count=5&sortByDate=1`);
        if (!response.ok)
            return
        const responseJSON = await response.json();
        setArticles(responseJSON.content);
        setPaging({...pagination, pages: responseJSON.numberOfPages});

    }

    useEffect(() => {
        getArticles();
    }, []);

    return(
        <div className={'margin flex flex-col gap-5 py-5 items-center'}>

            <div className={'flex flex-col items-center'}>
                <h1 className={'text-4xl text-center'}>
                    Panel redakcyjny
                </h1>
            </div>

            {
                articles.map((article, index) => {
                    return <AdminArticle article={article} index={index} />
                })
            }
        </div>
    )
}