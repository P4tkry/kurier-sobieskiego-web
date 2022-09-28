import {useRef, useState} from "react";

export default function Tags(props: {tags: string[], setTags: (tag: string[]) => void}) {

    const inputRef = useRef<HTMLInputElement>(null);

    function arrayRemove(arr: string[], value: any) {

        return arr.filter(function (ele) {
            return ele != value;
        });
    }

    return (
        <div className={'flex gap-2 flex-wrap'}>
            <div className={'border-2 border-slate-400 text-slate-600 px-1 py-0.5 rounded-full flex items-center w-fit'}>
                <button type={'button'} className={'flex items-center justify-center mx-1'} onClick={() => {
                    if (inputRef.current?.value) {
                        props.setTags([...props.tags, inputRef.current.value]);
                        inputRef.current.value = '';
                    }
                }}>
                    <span className="material-icons-outlined">
                        add
                    </span>
                </button>
                <input ref={inputRef} onKeyDown={(event)=>{
                    if(event.key === 'Enter'){
                        if (inputRef.current?.value) {
                            props.setTags([...props.tags, inputRef.current.value]);
                            inputRef.current.value = '';
                        }
                    }
                }} type={'text'} className={'outline-none w-28 bg-transparent text-white'}/>
            </div>

            {
                props.tags.map((tag, index) => {
                    return (
                        <div key={`tag-${index}`} className={'bg-gray-500 text-white px-3 py-1 rounded-full flex items-center gap-1'}>
                            <button type={'button'} className={'flex items-center justify-center'} onClick={()=>{
                                props.setTags(arrayRemove(props.tags, tag))
                            }}>
                                <span className="material-icons-outlined text-lg">
                                    close
                                </span>
                            </button>
                            <p>
                                {
                                    tag
                                }
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}