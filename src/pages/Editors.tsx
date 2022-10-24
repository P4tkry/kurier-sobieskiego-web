import editorsBg from "../assets/editors-bg.webp";
import Editor1 from "../assets/editors/Natka_Walesieniuk.webp";
import Editor2 from "../assets/editors/Janek_Wyrzykowski.webp";
import Editor3 from "../assets/editors/Jul_Kominek.webp";
import Editor4 from "../assets/editors/prof._Dorota_Sech.webp";

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

    return (
        <div>
            <div className={'py-10 bg-cover bg-center'}
                 style={{backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.8), rgba(23, 23, 23, 0.8)), url(${editorsBg})`}}>

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

            <div className={'flex margin justify-center gap-4 flex-wrap'}>
                <Editor name={'Natalia'} surname={'Walesieniuk'} role={'redaktor naczelna'} image={Editor1}/>

                <Editor name={'Janek'} surname={'Wyrzykowski'}
                        role={'poprzedni redaktor naczelny, udaje że coś robi, pajacuje'} image={Editor2}/>

                <Editor name={'Jul'} surname={'Kominek'} role={'zastępca redaktor naczelnej'} image={Editor3}/>

                <Editor name={'prof. Dorota'} surname={'Sech'} role={'korekta, wsparcie merytoryczne'} image={Editor4}/>


            </div>

            <div className={'flex items-center flex-col py-5 mt-5 bg-neutral-600'}>
                <div className={'flex gap-2 items-center mb-3'}>
                    <span className="material-icons-outlined">
                        email
                    </span>
                    <a href={'mailto:odsieczwiedenska75@gmail.com'} className={'underline font-times-new-roman'}>
                        odsieczwiedenska75@gmail.com
                    </a>
                </div>

                <div className={'flex gap-2 items-center'}>
                <span className="material-icons-outlined">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-instagram" viewBox="0 0 16 16">
                      <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                </span>
                    <a href={'https://www.instagram.com/odsieczwiedenska/'} className={'underline font-times-new-roman'}>
                        @odsieczwiedenska
                    </a>
                </div>
            </div>
        </div>
    )
}