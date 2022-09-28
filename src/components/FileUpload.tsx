import {FormikProps} from "formik";
import React, {useRef, useState} from "react";
import {useDropzone} from "react-dropzone";

export default function FileUpload(props: { name: string, formik: any, labelText: string, imgClass: string  }) {

    const inputRef = useRef<any>();
    const {getRootProps, getInputProps, fileRejections} = useDropzone({
        onDrop: (acceptedFiles) => {
            props.formik.setFieldValue(props.name, acceptedFiles[0])
        },

        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/svg+xml': []
        },
        multiple: false
    });


    return (
        <>
            <div className={'flex flex-col justify-center items-center gap-1'} >
                <div className={'flex flex-col items-center'}>
                    <p className={'text-sm text-gray-500'}>
                        {
                            props.labelText
                        }
                    </p>
                    <p className={'text-sm text-red-500'}>
                        {
                            props.formik.errors[props.name]
                        }
                    </p>
                </div>
                <div className={`border-2 border-dashed border-gray-500 text-gray-500 rounded p-4 cursor-pointer ${props.formik.errors[props.name] && 'border-red-500 text-red-500' }`} {...getRootProps()}>
                    {
                        (!props.formik.values[props.name]) ?
                            <div className={'flex flex-col items-center'}>
                                <div className={'flex items-center gap-2'}>
                                <span className="material-icons-outlined">
                                    file_upload
                                </span>
                                    <p>
                                        Kliknij aby wybrać zdjęcie
                                    </p>
                                </div>
                                {
                                    fileRejections[0] && <p className={'text-sm text-red-500'}>Plik nie może być załadowany</p>
                                }
                            </div>
                            :
                            <img className={`${props.imgClass} object-cover`} src={typeof props.formik.values[props.name] === 'string'? props.formik.values[props.name]: URL.createObjectURL(props.formik.values[props.name])}/>
                    }
                    <input ref={inputRef} {...getInputProps({name: props.name})} />
                </div>
            </div>
        </>
    )
}