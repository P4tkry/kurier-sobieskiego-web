import {Link} from "react-router-dom";
import {brands, light, regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer(){
    return(
        <div className={'bg-neutral-800 mt-5'}>
            <div className={'margin py-4 font-times-new-roman flex flex-col'}>
                <div className={'flex flex-wrap justify-around items-center gap-4'}>
                    <div className={'flex gap-2 mt-auto flex-col items-center'}>
                        <a href={'https://www.instagram.com/odsieczwiedenska/'} className={'hover:brightness-50 transition-all flex items-center gap-1'}>
                            <FontAwesomeIcon icon={brands('instagram')} className={'text-2xl'}/>
                            <span className={'underline'}>
                            @odsieczwiedenska
                        </span>
                        </a>

                        <a href={'https://www.instagram.com/odsieczwiedenska/'} className={'hover:brightness-50 transition-all flex items-center gap-1'}>
                            <FontAwesomeIcon icon={regular('envelope')} className={'text-2xl'}/>
                            <span className={'underline'}>
                            odsieczwiedenska75@gmail.com
                        </span>
                        </a>
                    </div>
                </div>


                <div className={'flex mt-2 flex-wrap justify-center sm:justify-between '}>

                    <small>
                        © Kurier Sobieskiego {new Date().getFullYear()}
                    </small>

                    <small>
                        Website created by: <a href={'https://www.linkedin.com/in/patryk-rusak/'} className={'hover:brightness-50 transition-all'}>Patryk Rusak</a>
                    </small>
                </div>
            </div>
        </div>
    )
}