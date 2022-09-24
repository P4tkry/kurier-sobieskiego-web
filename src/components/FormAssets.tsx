import {HTMLInputTypeAttribute} from "react";
import {ErrorMessage, Field, FormikProps} from "formik";

export function Input(props: { type: HTMLInputTypeAttribute, name: string, formik: FormikProps<any>, placeholder: string }) {
    return (
        <div className={'flex flex-col font-roboto text-sm'}>
            <Field placeholder={props.placeholder} type={props.type} id={`id-${props.name}`} name={props.name}
                   className={`text-black mb-1 bg-white px-2 py-1 outline-0 rounded ring-sky-500 focus:ring-2 ${props.formik.errors[props.name] && props.formik.touched[props.name] && 'text-red-500 border-red-500'}`}/>

            <ErrorMessage name={props.name} component={'label'} className={'text-red-500 ml-2 text-xs'} />

        </div>
    )
}