import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Form } from "../../../../components/Form";

const createAttribute = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [attributeType, setAttributeType] = useState({});
    const onSubmit = data => console.log(data);
    console.log(errors);
    const attributeTypes = [
        {value: 'text', label: 'Text'},
        {value: 'text-area', label: 'Text Area'},
        {value: 'radio', label: 'Radio'},
        {value: 'simple-select', label: 'Simple Select'},
        {value: 'muli-select', label: 'Milt Select'},
    ];

    const handleAttrybiteTypeChange = (attributeType) => {
        setAttributeType(attributeType);
        register('attributeType', {value: attributeType.value});
      }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-md mb-6">
                    <label for="code" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Lable</label>
                    <input type="text" className="w-full bg-white-50 border border-gray-300" {...register("label", {required: true, maxLength: 80})} />
                    {/* {errors.code && <p>{errors.code.message}</p>} */}
                </div>
                <div className="max-w-md mb-6">
                    <label for="code" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Code</label>
                    <input type="text" className="w-full bg-white-50 border border-gray-300" {...register("code", {required: true, maxLength: 80})} />
                    {/* {errors.code && <p>{errors.code.message}</p>} */}
                </div>
                <div className="max-w-md mb-6">
                    <label for="label" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Type</label>
                    <Select
                        defaultValue={attributeType}
                        name="attributeType"
                        options={attributeTypes}
                        className="basic-select"
                        classNamePrefix="select"
                        onChange={handleAttrybiteTypeChange}
                        />
                </div>
            </form>
        </>
    );
}

export default createAttribute;