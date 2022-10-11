import editorsBg from "../assets/editors-bg.webp";
import Editor1 from "../assets/editors/Natka_Walesieniuk.webp";
import Editor2 from "../assets/editors/Janek_Wyrzykowski.webp";
import Editor3 from "../assets/editors/Jul_Kominek.webp";
import Editor4 from "../assets/editors/prof._Dorota_Sech.webp";

export default function Editors() {
    function Editor(props:{image: string, name: string, surname:string, role: string}){
        return(
            <div className={'flex items-center flex-col border-2 w-[240px]'}>
                <img src={props.image} alt={'Redaktor Kuriera Sobieskiego'} className={'mb-2 w-full h-[200px] object-cover'} />

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
    return (
        <div>
            <div className={'py-10 bg-cover bg-center'} style={{backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.8), rgba(23, 23, 23, 0.8)), url(${editorsBg})`}}>

                <h1 className={'text-center text-6xl uppercase mb-4'}>
                    Redakcja
                </h1>

                <div className={'mb-4'}>
                    <h3 className={'text-xl sm:text-3xl text-center mb-1'}>
                        KIM JESTEŚMY?
                    </h3>
                    <p className={'text-sm sm:text-base text-center'}>
                        Jesteśmy grupą artystycznych dusz, wrażliwych obserwatorów rzeczywistości.<br/>
                        Piszemy o rzeczach które nas poruszyły, zaciekawiły i zaskoczyły.<br/>
                        Staramy się uchwycić świat w nieoczywisty sposób.<br/>
                        Aspirujemy do bycia najbardziej opiniotwórczą warszawską gazetą młodzieżową.<br/>
                    </p>
                </div>

            </div>

            <div className={'margin my-5'}>
                <h3 className={'text-xl sm:text-3xl text-center mb-1'}>
                    JAK TO SIĘ ZACZĘŁO?
                </h3>
                <p className={'text-sm sm:text-base text-center'}>
                    Jeden z naszych redaktorów, Aleksy, za namową Pani Doroty Sech zebrał grupę sześciu osób, która miała stać się zalążkiem dzisiejszej redakcji „Kuriera Sobieskiego”. Grupa zajęła się treścią a Marysia i Bacha dbały o to aby gazeta prezentowała się jak najlepiej. Naszym zamiarem było stworzyć gazetę o ważnych rzeczach, która trafi zarówno do uczniów jak i nauczycieli. „Odsiecz Wiedeńska” (bo tak na początku miało nazywać się nasze czasopismo) to drobny  projekt, który po zdobyciu powszechnego zainteresowania i aprobaty Pani Dyrektor, pod nową nazwą „Kurier Sobieskiego” ujrzało światło dzienne. Dostarczamy najnowszych informacji kulturalnych, muzycznych i filmowych, piszemy o modzie i ochronie środowiska, oraz rozmawiamy z najciekawszymi ludźmi. Niezmiennie dla was, od października 2019 roku.
                </p>
            </div>

            <div className={'flex margin justify-center gap-4 flex-wrap'}>
                <Editor name={'Natalia'} surname={'Walesieniuk'} role={'redaktor naczelna'} image={Editor1}/>

                <Editor name={'Janek'} surname={'Wyrzykowski'} role={'poprzedni redaktor naczelny, udaje że coś robi, pajacuje'} image={Editor2}/>

                <Editor name={'Jul'} surname={'Kominek'} role={'zastępca redaktor naczelnej'} image={Editor3}/>

                <Editor name={'prof. Dorota'} surname={'Sech'} role={'korekta, wsparcie merytoryczne'} image={Editor4}/>



            </div>
        </div>
    )
}