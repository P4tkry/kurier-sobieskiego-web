import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {useState} from "react";
import {text} from "stream/consumers";

export default function NavBar(props: { logged: boolean, logout: () => void }) {
    const isMobile = useMediaQuery({maxWidth: 768})
    const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
    const [showMoreArticles, setShowMoreArticles] = useState<boolean>(false);

    return (
        <>
            <nav
                onMouseLeave={() => setShowMobileNavbar(false)}
                className={'font-times-new-roman w-full flex items-center py-3 gap-1 flex-col border-b border-white bg-neutral-900 absolute sm:relative transition-all duration-500'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={'text-xl sm:text-2xl text-center'}>KURIER SOBIESKIEGO</h2>
                    {
                        isMobile &&
                        <button className={'absolute right-3'} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                            <span className="material-symbols-outlined text-3xl">
                                {
                                    !showMobileNavbar ? "menu" : "close"
                                }

                            </span>
                        </button>

                    }
                </div>
                {
                    (!isMobile || showMobileNavbar) &&
                    <div className={'flex flex-col items-center md:flex-row md:divide-x divide-white/50 md:border-x border-white/50'}>

                        <div className={'px-2'}>
                            <Link to={'/'} className={'hover-text'} onClick={() => setShowMoreArticles(false)}>
                                STRONA GŁÓWNA
                            </Link>
                        </div>

                        <div className={'px-2'} onMouseEnter={() => setShowMoreArticles(true)} onMouseLeave={() => setShowMoreArticles(false)}>
                            <div className={'flex flex-col items-center'} >
                                <p className={`cursor-pointer ${showMoreArticles ? 'border-b border-b-white': 'hover-text'}`}>
                                    TEKSTY
                                </p>

                                <div className={'flex flex-col items-center transition-all'}>
                                    <div className={`absolute z-10 py-2 px-2 bg-neutral-600 rounded ${!showMoreArticles && 'hidden'}`} >
                                        <div className={'flex flex-col items-center'}>
                                            <Link to={'/teksty/wywiad'} >
                                                <button className={'hover-text'}>
                                                    WYWIADY
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/sport'}>
                                                <button className={'hover-text'}>
                                                    SPORT
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/muzyka'} >
                                                <button className={'hover-text'}>
                                                    MUZYKA
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/książki'} >
                                                <button className={'hover-text'}>
                                                    KSIĄŻKI
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/filmy'}>
                                                <button className={'hover-text'}>
                                                    FILMY
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/społeczne'} >
                                                <button className={'hover-text'}>
                                                    SPOŁECZNE
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/ekologia'}>
                                                <button className={'hover-text'}>
                                                    EKOLOGIA
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/sztuka'} >
                                                <button className={'hover-text'}>
                                                    SZTUKA
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/historia'}>
                                                <button className={'hover-text'}>
                                                    HISTORIA
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/lifestyle'} >
                                                <button className={'hover-text'}>
                                                    LIFESTYLE
                                                </button>
                                            </Link>

                                            <Link to={'/teksty/BIDON'} >
                                                <button className={'hover-text'}>
                                                    BIDON
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <div className={'px-2'}>
                            <Link to={'/redakcja'} className={'hover-text'} onClick={() => setShowMoreArticles(false)}>
                                REDAKCJA
                            </Link>
                        </div>

                        <div className={'px-2'}>
                            <Link to={'/archiwum'} className={'hover-text'} onClick={() => setShowMoreArticles(false)}>
                                ARCHIWUM
                            </Link>
                        </div>


                        {
                            props.logged &&
                            <>
                                <div className={'px-2 text-sky-500'}>
                                    <Link to={'/adminPanel'} className={'hover-text'} onClick={() => setShowMoreArticles(false)}>
                                        PANEL REDAKCYJNY
                                    </Link>
                                </div>
                                <div className={'px-2 text-red-400'}>
                                    <p className={'hover-text cursor-pointer'} onClick={()=>{
                                        props.logout();
                                        setShowMoreArticles(false)
                                    }} >
                                        WYLOGUJ SIĘ
                                    </p>
                                </div>
                            </>
                        }

                    </div>
                }


            </nav>
            <div className={'h-[49px] sm:hidden'}/>
        </>
    )
}