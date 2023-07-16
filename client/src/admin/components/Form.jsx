import React from "react";

export const Form = ({btnTitle, handleSubmit, errors, modal = false, children}) => {
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                {!modal ? (
                    <input type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 float-right text-white font-bold py-2 px-4 border border-blue-700 rounded" value={btnTitle}/>
                ) : null}
                
                {children}

            </form>
    );
}