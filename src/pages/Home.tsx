import {changeTitle} from "../utils/changeTitle";
import {useEffect, useState} from "react";
import {IArticle} from "../models";
import api from "../utils/api";
import ArticleBox from "../components/ArticleBox";
import kurierSobieskiegoBg from "../assets/kurier-sobieskiego-bg.webp";
import {useMediaQuery} from "react-responsive";

export default function Home(){
    changeTitle('Strona główna');

    const [articles, setArticles] = useState<IArticle[]>([]);

    async function getArticles(){
        const response = await api.get(`articles?page=1&count=5&sortByDate=-1`);
        if(!response.ok)
            return
        const responseJSON = await response.json();
        setArticles(responseJSON.content);
    }


    useEffect(()=>{
        getArticles()
    },[])

    return(
        <div>
            <div className={'py-10 bg-cover bg-center'} style={{backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.8), rgba(23, 23, 23, 0.8)), url(${kurierSobieskiegoBg})`}}>
                <div className={'margin text-white flex flex-col items-center'}>
                    <h1 className={'uppercase leading-[0.8] md:leading-[0.8] sm:leading-[0.8] text-5xl sm:text-6xl md:text-8xl font-normal mb-8 text-center sm:text-left'}>
                        Kurier<br/><span className={'ml-0 sm:ml-8 md:ml-14'}>Sobieskiego</span>
                    </h1>
                    <h3 className={'text-xl sm:text-3xl mb-3 text-center'}>
                        WARSZAWSKI DWUMIESIĘCZNIK MŁODZIEŻOWY
                    </h3>
                    <p className={'text-sm sm:text-base text-center'}>
                        Dostarczamy najnowsze informacje kulturalne, muzyczne i filmowe.<br/>
                        Piszemy o modzie i ochronie środowiska.<br/>
                        Przedstawiamy aktualne wydarzenia społeczne i polityczne z nowego punktu widzenia.<br/>
                        Rozmawiamy z oryginalnymi i ciekawymi ludźmi.<br/>
                        Wszystko to w dopieszczonej i klimatycznej formie gazety.<br/>
                        Niezmiennie dla was, od października 2019.<br/>
                    </p>
                </div>
            </div>

            <div className={'margin'}>
                {
                    articles.map((article, index) =>{
                        return(
                            <ArticleBox article={article} index={index} className={'my-4'} />
                        )
                    })
                }
            </div>
        </div>
    )
}