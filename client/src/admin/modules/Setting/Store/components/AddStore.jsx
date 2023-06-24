import React from "react";
import { useForm } from 'react-hook-form';

import Select from 'react-select';

const AddStore = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const localOptions = [
        {value: 'en_US', label: 'English'},
        {value: 'en_GN', label: 'German'},
    ];

    const categories = [
        {value: 'master', label: 'Master'},
        {value: 'master1', label: 'Master1'},
    ];


  const handleLocaleChange = (value) => {
    let locales = value.map((locale, index) => {
        return locale.value;
    });
    register('locales', {value: locales});
  }
   
  const handleCategoryChange = (category) => {
    register('category', {value: category.value});
  }

    return (
        <div className="px-8 py-20 bg-white dark:bg-[#182235]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-md mb-6">
                    <label for="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                    <input type="text" className="w-full bg-white-50 border border-gray-300" {...register("code", {required: true, maxLength: 80})} />
                    {errors.code && <p>{errors.code.message}</p>}
                </div>
                <div className="max-w-md  mb-6">
                    <label for="label" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Label</label>
                    <input type="text" className="w-full  bg-white-50 border border-gray-300" {...register("lebel", {required: true, maxLength: 80})} />
                </div>

                <div className="max-w-md mb-6">
                    <label for="label" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Locale</label>
                    <Select
                        defaultValue={null}
                        isMulti
                        name="locals"
                        options={localOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleLocaleChange}
                        />
                </div>

                <div className="max-w-md mb-6">
                    <label for="label" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catagory</label>
                    <Select
                        defaultValue={null}
                        name="category"
                        options={categories}
                        className="basic-select"
                        classNamePrefix="select"
                        onChange={handleCategoryChange}
                        />
                </div>
                
        
                <input type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" />
            </form>
        </div>
    );
}

export default AddStore;