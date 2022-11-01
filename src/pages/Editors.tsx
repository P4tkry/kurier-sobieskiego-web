import editorsBg from "../assets/editors-bg.webp";
import Editor1 from "../assets/editors/Natka_Walesieniuk.webp";
import Editor2 from "../assets/editors/Janek_Wyrzykowski.webp";
import Editor3 from "../assets/editors/Jul_Kominek.webp";
import Editor4 from "../assets/editors/prof._Dorota_Sech.webp";
import Editor5 from "../assets/editors/Toha_Pniewska.webp";
import Editor6 from "../assets/editors/Martyna_Knyziak.webp";
import Editor7 from "../assets/editors/Wiktoria_Kraszeninnikowa.webp";
import Editor8 from "../assets/editors/Karolina_Ostoja_Ostaszewska.webp";
import Editor9 from "../assets/editors/Maria_Juźków.webp";
import Editor10 from "../assets/editors/Julian_Stachowski.webp";
import Editor11 from "../assets/editors/Kamila_Tula.webp";
import Editor12 from "../assets/editors/Gustaw_Marcinkowski.webp";
import Editor13 from "../assets/editors/Gustaw_Szaszkiewicz.webp";
import Editor14 from "../assets/editors/Iga_Nadia_Pietrzak.webp";

import OldEditor1 from "../assets/editors/oldEditors/o_e_Aleksy_Jakubiec.webp";
import OldEditor2 from "../assets/editors/oldEditors/o_e_Alicja_Nowak.webp";
import OldEditor3 from "../assets/editors/oldEditors/o_e_Amelia_Bilińska.webp";
import OldEditor4 from "../assets/editors/oldEditors/o_e_Amelia_Skrzypczak.webp";
import OldEditor5 from "../assets/editors/oldEditors/o_e_Bacha_Skorupska.webp";
import OldEditor6 from "../assets/editors/oldEditors/o_e_Barbara_Witan.webp";
import OldEditor7 from "../assets/editors/oldEditors/o_e_Dorota_Pisarek.webp";
import OldEditor8 from "../assets/editors/oldEditors/o_e_Jakub_Łasicki.webp";
import OldEditor9 from "../assets/editors/oldEditors/o_e_Karolina_Daniluk.webp";
import OldEditor10 from "../assets/editors/oldEditors/o_e_Kosma_Kosierkiewicz.webp";
import OldEditor11 from "../assets/editors/oldEditors/o_e_Maja_Krawczyk.webp";
import OldEditor12 from "../assets/editors/oldEditors/o_e_Maria_Ludwisiak.webp";
import OldEditor13 from "../assets/editors/oldEditors/o_e_Martyna_Krawczyk.webp";
import OldEditor14 from "../assets/editors/oldEditors/o_e_Marysia_Dziekońska.webp";
import OldEditor15 from "../assets/editors/oldEditors/o_e_Olaf_Kardaszewski.webp";
import OldEditor16 from "../assets/editors/oldEditors/o_e_Ola_Broda.webp";
import OldEditor17 from "../assets/editors/oldEditors/o_e_Piotr_Jurczyński.webp";
import OldEditor18 from "../assets/editors/oldEditors/o_e_Stanisław_Klarecki.webp";
import OldEditor19 from "../assets/editors/oldEditors/o_e_Zosia_Jaśkiewicz.webp";

export default function Editors() {
    function Editor(props: { image: string, name: string, surname: string, role: string }) {
        return (
            <div className={'flex items-center flex-col border-2 w-[240px]'}>
                <img src={props.image} alt={'Redaktor Kuriera Sobieskiego'}
                     className={'mb-2 w-full h-[200px] object-cover'}/>

                <div className={'pb-3 px-3'}>
                    <h4 className={'text-2xl text-center leading-none mb-2'}>
                        {props.name}<br/>
                        {props.surname}
                    </h4>
                    <p className={'text-lg text-gray-400 text-center leading-none'}>
                        {props.role}
                    </p>
                </div>

            </div>
        )
    }

    function StandardEditor(props: { image: string, name: string, surname: string, role?: string }) {
        return (
            <div className={'flex items-center flex-col border-2 w-[200px]'}>
                <img src={props.image} alt={'Redaktor Kuriera Sobieskiego'}
                     className={'w-full h-[180px] object-cover'}/>

                <div className={'py-4 px-3'}>
                    <h4 className={'text-xl text-center leading-none'}>
                        {props.name}<br/>
                        {props.surname}
                    </h4>
                    {
                        props.role && <p className={'text-lg text-gray-400 text-center leading-none mt-2'}>
                            {props.role}
                        </p>
                    }
                </div>

            </div>
        )
    }

    return (
        <div>
            <div className={'py-10 bg-cover bg-center'}
                 style={{backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.8), rgba(23, 23, 23, 0.8)), url(${editorsBg})`}}>

                <h1 className={'text-center text-4xl uppercase mb-4 md:text-6xl'}>
                    Redakcja
                </h1>

                <div className={'mb-4'}>
                    <h3 className={'text-xl sm:text-3xl text-center mb-1'}>
                        KIM JESTEŚMY?
                    </h3>
                    <p className={'text-sm sm:text-base text-center'}>
                        Jesteśmy grupą młodzieży, która potrafi obserwować otaczający nas świat.<br/>
                        Piszemy o rzeczach, które zwróciły na nas uwagę, poruszyły nas, zaciekawiły.<br/>
                        Staramy się przedstawiać świat w nieoczywisty sposób.<br/>
                        Aspirujemy do bycia najbardziej opiniotwórczym portalem młodzieżowym.<br/>
                    </p>
                </div>

            </div>

            <div className={'margin my-5'}>
                <h3 className={'text-xl sm:text-3xl text-center mb-1'}>
                    JAK TO SIĘ ZACZĘŁO?
                </h3>
                <p className={'text-sm sm:text-base text-center'}>
                    Jeden z naszych redaktorów, Aleksy, za namową Pani Doroty Sech zebrał grupę sześciu osób, która
                    miała stać się zalążkiem dzisiejszej redakcji „Kuriera Sobieskiego”. Grupa zajęła się treścią a
                    Marysia i Bacha dbały o to aby gazeta prezentowała się jak najlepiej. Naszym zamiarem było stworzyć
                    gazetę o ważnych rzeczach, która trafi zarówno do uczniów jak i nauczycieli. „Odsiecz Wiedeńska” (bo
                    tak na początku miało nazywać się nasze czasopismo) to drobny projekt, który po zdobyciu
                    powszechnego zainteresowania i aprobaty Pani Dyrektor, pod nową nazwą „Kurier Sobieskiego” ujrzało
                    światło dzienne. Dostarczamy najnowszych informacji kulturalnych, muzycznych i filmowych, piszemy o
                    modzie i ochronie środowiska, oraz rozmawiamy z najciekawszymi ludźmi. Niezmiennie dla was, od
                    października 2019 roku.
                </p>
            </div>

            <div className={'flex justify-center gap-4 flex-wrap'}>
                <Editor name={'Natalia'} surname={'Walesieniuk'} role={'redaktor naczelna'} image={Editor1}/>

                <Editor name={'Jul'} surname={'Kominek'} role={'zastępca redaktor naczelnej'} image={Editor3}/>

                <Editor name={'Toha'} surname={'Pniewska'} role={'koordynator ds. social media'} image={Editor5}/>

                <Editor name={'prof. Dorota'} surname={'Sech'} role={'korekta, wsparcie merytoryczne'} image={Editor4}/>

                <Editor name={'Janek'} surname={'Wyrzykowski'}
                        role={'były redaktor, udaje że coś robi, pajacuje'} image={Editor2}/>


            </div>

            <h1 className={'text-center text-3xl my-5 uppercase'}>
                Redaktorzy
            </h1>
            <div className={'flex justify-center gap-4 flex-wrap margin'}>
                <StandardEditor image={Editor6} name={'Martyna'} surname={'Knyziak'}/>
                <StandardEditor image={Editor7} name={'Wiktoria'} surname={'Kraszeninnikowa'}/>
                <StandardEditor image={Editor8} name={'Karolina'} surname={'Ostoja-Ostaszewska'}/>
                <StandardEditor image={Editor9} name={'Maria'} surname={'Juźków'}/>
                <StandardEditor image={Editor10} name={'Julian'} surname={'Stachowski'}/>
                <StandardEditor image={Editor11} name={'Kamila'} surname={'Tula'}/>
                <StandardEditor image={Editor12} name={'Gustaw'} surname={'Marcinkowski'}/>
                <StandardEditor image={Editor13} name={'Gustaw'} surname={'Szaszkiewicz'}/>
                <StandardEditor image={Editor14} name={'Iga Nadia'} surname={'Pietrzak'}/>
            </div>

            <h1 className={'text-center text-3xl my-5 uppercase'}>
                Byli Redaktorzy
            </h1>
            <div className={'flex justify-center gap-4 flex-wrap mb-4'}>
                <StandardEditor image={OldEditor1} name={"Aleksy"} surname={"Jakubiec"} role={'ojciec założyciel'}/>
                <StandardEditor image={OldEditor12} name={"Maria"} surname={"Ludwisiak"} role={'pierwsza redaktor naczelna'}/>
                <StandardEditor image={OldEditor5} name={"Bacha"} surname={"Skorupska"} role={'typesetting master'}/>
                <StandardEditor image={OldEditor18} name={"Stanisław"} surname={"Klarecki"} role={'koordynator ds. social mediów'}/>
            </div>
            <div className={'flex justify-center gap-4 flex-wrap margin'}>
                <StandardEditor image={OldEditor2} name={"Alicja"} surname={"Nowak"}/>
                <StandardEditor image={OldEditor3} name={"Amelia"} surname={"Bilińska"}/>
                <StandardEditor image={OldEditor4} name={"Amelia"} surname={"Skrzypczak"}/>
                <StandardEditor image={OldEditor6} name={"Barbara"} surname={"Witan"}/>
                <StandardEditor image={OldEditor7} name={"Dorota"} surname={"Pisarek"}/>
                <StandardEditor image={OldEditor8} name={"Jakub"} surname={"Łasicki"}/>
                <StandardEditor image={OldEditor9} name={"Karolina"} surname={"Daniluk"}/>
                <StandardEditor image={OldEditor10} name={"Kosma"} surname={"Kosierkiewicz"}/>
                <StandardEditor image={OldEditor11} name={"Maja"} surname={"Krawczyk"}/>
                <StandardEditor image={OldEditor13} name={"Martyna"} surname={"Krawczyk"}/>
                <StandardEditor image={OldEditor14} name={"Marysia"} surname={"Dziekońska"}/>
                <StandardEditor image={OldEditor15} name={"Olaf"} surname={"Kardaszewski"}/>
                <StandardEditor image={OldEditor16} name={"Ola"} surname={"Broda"}/>
                <StandardEditor image={OldEditor17} name={"Piotr"} surname={"Jurczyński"}/>
                <StandardEditor image={OldEditor19} name={"Zosia"} surname={"Jaśkiewicz"}/>
            </div>
        </div>
    )
}