import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

export default function NavBar(props: {logged: boolean, logout: ()=>void}) {
    const isMobile = useMediaQuery({maxWidth: 640})
    return (
        <nav className={'w-full flex items-center pt-1 pb-3 gap-1 flex-col border-b border-white'}>
            <h2 className={'text-2xl text-center'}>KURIER SOBIESKIEGO</h2>

            <div className={'flex font-times-new-roman text-sm text-center flex-col sm:flex-row gap-2 sm:gap-0'}>

                <div className={'px-2 sm:border-r sm:border-l border-white/50'}>
                    <Link to={'/'} className={'hover-text'}>
                        STRONA GŁÓWNA
                    </Link>
                </div>


                <div className={'px-2 sm:border-r border-white/50'}>
                    <Link to={'/archiwum'} className={'hover-text'}>
                        ARCHIWUM
                    </Link>
                </div>

                <div className={'px-2 sm:border-r border-white/50'}>
                    <Link to={'/redakcja'} className={'hover-text'}>
                        REDAKCJA
                    </Link>
                </div>


                <div className={'px-2 sm:border-r border-white/50'}>
                    <Link to={'/kontakt'} className={'hover-text'}>
                        KONTAKT
                    </Link>
                </div>

                <div className={'px-2 sm:border-r border-white/50'}>
                    <Link to={'/teksty'} className={'hover-text'}>
                        TEKSTY
                    </Link>
                </div>

                {
                    props.logged &&
                    <>
                        <div className={'px-2 sm:border-r text-sky-500 border-white/50'}>
                            <Link to={'/adminPanel'} className={'hover-text'}>
                                PANEL REDAKCYJNY
                            </Link>
                        </div>
                        <div className={'px-2 sm:border-r border-white/50 text-red-400'}>
                            <p className={'hover-text cursor-pointer'} onClick={props.logout}>
                                WYLOGUJ SIĘ
                            </p>
                        </div>
                    </>
                }

            </div>
        </nav>
    )
}