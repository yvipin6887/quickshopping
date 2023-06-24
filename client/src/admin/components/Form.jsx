import React from "react";

import { useForm } from 'react-hook-form';

export const Form = ({btnTitle, children}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 float-right text-white font-bold py-2 px-4 border border-blue-700 rounded" value={btnTitle}/>
            {children}

        </form>
    );
}