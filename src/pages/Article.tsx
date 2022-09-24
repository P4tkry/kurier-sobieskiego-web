import {useEffect, useState} from "react";
import {IArticle} from "../models";
import api from "../utils/api";
import {useParams} from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";
import * as DOMPurify from 'dompurify';

export default function Article(){
    const [article, setArticle]= useState<{content?: IArticle, state: 'pending'|200|404}>({state: 'pending'});

    const { articleId } = useParams();

    async function getArticle(){
        const response = await api.get(`articles/${articleId}`);
        if(!response.ok)
            return setArticle({state: 404});
        const responseJSON = await response.json();
        setArticle({state: 200, content: responseJSON});
    }

    useEffect(()=>{
        getArticle()
    },[])

    return(
        <div className={'margin mt-4'}>
            {
                (article.state === 200 && article.content) &&
                <div>
                    <p className={'mb-2 text-xs'}>
                        {
                            article.content.author
                        }
                        ,
                        <span className={'ml-1 text-neutral-400'}>
                            {
                                dateFormatter(new Date(parseInt(article.content._id.substring(0, 8), 16) * 1000))
                            }
                        </span>
                    </p>
                    <h1 className={'font-ropa-sans text-3xl mb-2'}>
                        {
                            article.content.title
                        }
                    </h1>
                    <div className={'font-times-new-roman'} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(article.content.content)}} />
                </div>
            }
        </div>
    )
}