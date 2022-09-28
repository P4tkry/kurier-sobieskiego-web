import {Dispatch, SetStateAction} from "react";

export default function Pagination(props: {paging: {page: number, pagesNumber: number}, setPaging: Dispatch<SetStateAction<{page: number, pagesNumber: number}>>}) {
    return (
        <nav className={'flex items-center rounded border border-neutral-700 bg-neutral-500 text-white text-lg'}>

            <button onClick={()=>{
                props.setPaging({...props.paging, page: props.paging.page-1});
            }}disabled={1>=props.paging.page} className={'flex items-center enabled:hover:bg-neutral-300 disabled:text-neutral-400 border-r border-neutral-700 h-[28px]'}>
                <span className="material-icons-outlined">
                    navigate_before
                </span>
            </button>

            {
                Array.from({length: props.paging.pagesNumber}, (_, i) => i + 1).map((value)=>{
                    return (
                        <button disabled={value===props.paging.page} onClick={()=>{
                            props.setPaging({...props.paging, page: value});
                        }} key={`pagination-${value}`} className={`flex items-center border-l border-r border-neutral-700 px-2 ${props.paging.page===value ? 'text-neutral-400': 'hover:bg-gray-300'}`}>
                            <p>
                                {value}
                            </p>
                        </button>
                    )
                })
            }


            <button onClick={()=>{
                props.setPaging({...props.paging, page: props.paging.page+1});
            }} disabled={props.paging.pagesNumber<=props.paging.page} className={'flex items-center enabled:hover:bg-neutral-300 disabled:text-neutral-400 border-l border-neutral-700 h-[28px]'}>
                <span className="material-icons-outlined">
                    navigate_next
                </span>
            </button>
        </nav>
    )
}