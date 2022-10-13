import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {useState} from "react";

export default function NavBar(props: { logged: boolean, logout: () => void }) {
    const isMobile = useMediaQuery({maxWidth: 640})
    const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
    return (
        <>
            <nav className={'w-full flex items-center py-3 gap-1 flex-col border-b border-white bg-neutral-900 absolute sm:relative transition-all duration-500'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={'text-2xl text-center'}>KURIER SOBIESKIEGO</h2>
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
                    !isMobile ? <div className={'flex font-times-new-roman text-sm text-center flex-row gap-2 gap-0'}>

                            <div className={'px-2 border-r border-l border-white/50'}>
                                <Link to={'/'} className={'hover-text'}>
                                    STRONA GŁÓWNA
                                </Link>
                            </div>

                            <div className={'px-2 border-r border-white/50'}>
                                <Link to={'/teksty'} className={'hover-text'}>
                                    TEKSTY
                                </Link>
                            </div>


                            <div className={'px-2 border-r border-white/50'}>
                                <Link to={'/redakcja'} className={'hover-text'}>
                                    REDAKCJA
                                </Link>
                            </div>

                            <div className={'px-2 border-r border-white/50'}>
                                <Link to={'/archiwum'} className={'hover-text'}>
                                    ARCHIWUM
                                </Link>
                            </div>


                            <div className={'px-2 border-r border-white/50'}>
                                <Link to={'/kontakt'} className={'hover-text'}>
                                    KONTAKT
                                </Link>
                            </div>

                            {
                                props.logged &&
                                <>
                                    <div className={'px-2 border-r text-sky-500 border-white/50'}>
                                        <Link to={'/adminPanel'} className={'hover-text'}>
                                            PANEL REDAKCYJNY
                                        </Link>
                                    </div>
                                    <div className={'px-2 border-r border-white/50 text-red-400'}>
                                        <p className={'hover-text cursor-pointer'} onClick={props.logout}>
                                            WYLOGUJ SIĘ
                                        </p>
                                    </div>
                                </>
                            }
                        </div> :
                        <>
                            {
                                showMobileNavbar && <div className={'flex flex-col text-lg transition-all'}>

                                    <div className={'px-2 border-white/50 text-center'}>
                                        <Link to={'/'} className={'hover-text'}>
                                            STRONA GŁÓWNA
                                        </Link>
                                    </div>

                                    <div className={'px-2 border-white/50 text-center'}>
                                        <Link to={'/teksty'} className={'hover-text'}>
                                            TEKSTY
                                        </Link>
                                    </div>

                                    <div className={'px-2 border-r border-white/50'}>
                                        <Link to={'/redakcja'} className={'hover-text'}>
                                            REDAKCJA
                                        </Link>
                                    </div>


                                    <div className={'px-2 border-white/50 text-center'}>
                                        <Link to={'/archiwum'} className={'hover-text'}>
                                            ARCHIWUM
                                        </Link>
                                    </div>


                                    <div className={'px-2 border-white/50 text-center'}>
                                        <Link to={'/kontakt'} className={'hover-text'}>
                                            KONTAKT
                                        </Link>
                                    </div>


                                    {
                                        props.logged &&
                                        <>
                                            <div className={'px-2 text-sky-500 border-white/50 text-center'}>
                                                <Link to={'/adminPanel'} className={'hover-text'}>
                                                    PANEL REDAKCYJNY
                                                </Link>
                                            </div>
                                            <div className={'px-2 border-white/50 text-red-400 text-center'}>
                                                <p className={'hover-text cursor-pointer'} onClick={props.logout}>
                                                    WYLOGUJ SIĘ
                                                </p>
                                            </div>
                                        </>
                                    }

                                </div>
                            }
                        </>


                }

            </nav>
            <div className={'h-[49px] sm:hidden'} />
        </>
    )
}