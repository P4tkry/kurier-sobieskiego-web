import KS_04_05_2022 from "../assets/archive_thumbnails/KS_04-05.2022.webp";
import KS_03_2022 from "../assets/archive_thumbnails/KS_03.2022.webp";
import KS_11_12_2021 from "../assets/archive_thumbnails/KS_11-12.2021.webp";
import KS_09_10_2021 from "../assets/archive_thumbnails/KS_09-10.2021.webp";
import KS_05_06_2021 from "../assets/archive_thumbnails/KS_05-06.2021.webp";
import KS_03_04_2021 from "../assets/archive_thumbnails/KS_03-04.2021.webp";
import KS_12_01_2021 from "../assets/archive_thumbnails/KS_12-01.2021.webp";
import KS_10_11_2020 from "../assets/archive_thumbnails/KS_10-11.2020.webp";
import KS_05_06_2020 from "../assets/archive_thumbnails/KS_05-06.2020.webp";
import KS_03_04_2020 from "../assets/archive_thumbnails/KS_03-04.2020.webp";
import KS_12_01_2020 from "../assets/archive_thumbnails/KS_12-01.2020.webp";
import KS_10_11_2019 from "../assets/archive_thumbnails/KS_10-11.2019.webp";
import KS_wakacje_2021 from "../assets/archive_thumbnails/KS_wakacje.2021.webp";
import KS_30lat_2021 from "../assets/archive_thumbnails/KS_30lat.2021.webp";
import KS_KFAS_2021 from "../assets/archive_thumbnails/KS_KFAS.2021.webp";
export default function Archive(){
    return(
        <div className={'flex flex-wrap margin my-10 justify-center gap-10 font-times-new-roman'}>
            <h1 className={'w-full text-5xl text-center uppercase'}>
                Wszystkie wydania
            </h1>
            <a href={'/archive/KS_04-05.2022.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_04_05_2022} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Kwiecień/Maj 2022
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_03.2022.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_03_2022} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Marzec 2022
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_11-12.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_11_12_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Listopad/Grudzień 2021
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_KFAS.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_KFAS_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <div>
                        <p className={'text-center'}>
                            KFAS 2021
                        </p>
                        <p className={'text-sm text-neutral-400 font-ropa-sans text-center'}>
                            Wydanie specjalne
                        </p>
                    </div>
                </div>
            </a>

            <a href={'/archive/KS_09-10.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_09_10_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Wrzesień/Październik 2021
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_30lat.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_30lat_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <div>
                        <p className={'text-center'}>
                            Trzydziestolecie
                        </p>
                        <p className={'text-sm text-neutral-400 font-ropa-sans text-center'}>
                            Wydanie specjalne
                        </p>
                    </div>
                </div>
            </a>

            <a href={'/archive/KS_wakacje.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_wakacje_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <div>
                        <p className={'text-center'}>
                            Wakacje 2021
                        </p>
                        <p className={'text-sm text-neutral-400 font-ropa-sans text-center'}>
                            Wydanie specjalne
                        </p>
                    </div>
                </div>
            </a>

            <a href={'/archive/KS_05-06.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_05_06_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Maj/Czerwiec 2021
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_03-04.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_03_04_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Marzec/Kwiecień 2021
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_12-01.2021.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_12_01_2021} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Grudzień/Styczeń 2021
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_10-11.2020.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_10_11_2020} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Październik/Listopad 2020
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_05-06.2020.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_05_06_2020} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Maj/Czerwiec 2020
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_03-04.2020.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_03_04_2020} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Marzec/Kwiecień 2020
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_12-01.2020.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_12_01_2020} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Grudzień/Styczeń 2020
                    </p>
                </div>
            </a>

            <a href={'/archive/KS_10_11.2019.pdf'} target="_blank">
                <div className={'flex flex-col items-center text-2xl gap-1 w-60 sm:w-72'}>
                    <img src={KS_10_11_2019} alt={'okładka kuriera Sobieskiego'}/>
                    <p className={'text-center'}>
                        Październik/Listopad 2019
                    </p>
                </div>
            </a>


        </div>
    )
}