import React, { useState } from "react";
import { useForm } from 'react-hook-form';

import Select from 'react-select';

import { useTabs, withTabs} from "../../../../components/Context/TabsContext";
import { Tabs, Tab } from "../../../../components/Tabs";
import { LayoutProvider } from "../../../../components/LayoutProvider";
import { Form } from "../../../../components/Form";

const StoreEditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [storeLocales, setStoreLocales] = useState([{value: 'en_US', label: 'English'}]);
    const [attributeLabel, setAttributeLabel] = useState({});

    const { setCurrentTab } = useTabs();
    const tabs = {
            firstTab: 'Properity',
            secondTab: 'Label'
        }

    const localOptions = [
        {value: 'en_US', label: 'English'},
        {value: 'en_GN', label: 'German'},
    ];

    const categories = [
        {value: 'master', label: 'Master'},
        {value: 'master1', label: 'Master1'},
    ];


  const handleLocaleChange = (value) => {
    setStoreLocales(value);
    let locales = value.map((locale, index) => {
        return locale.value;
    });
    register('locales', {value: locales});
  }
   
  const handleCategoryChange = (category) => {
    register('category', {value: category.value});
  }

    return (
        <LayoutProvider className={`h-[500px]`}>
            <Form btnTitle='Save' handleSubmit={handleSubmit} errors={errors}>
                <Tabs tabs={tabs} defaultTab={tabs.firstTab} onTabSelect={(tab) => setCurrentTab(tab)} className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark: text-gray-700">
                    <Tab id={tabs.firstTab}>
                        <div className="max-w-md mb-6 text-left">
                            <label for="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                            <input type="text" className="w-full bg-white-50 border border-gray-300" {...register("code", {required: true, maxLength: 80})} />
                            {errors.code && <p>{errors.code.message}</p>}
                        </div>
                        <div className="max-w-md mb-6 text-left">
                            <label for="label" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Locale</label>
                            <Select
                                defaultValue={storeLocales}
                                isMulti
                                name="locals"
                                options={localOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={handleLocaleChange}
                                />
                        </div>

                        <div className="max-w-md mb-6 text-left">
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
                    </Tab>
                    <Tab id={tabs.secondTab}>
                        <div className="max-w-md  mb-6 text-left">
                            {storeLocales.map(storeLocal => (
                                <>
                                <label for="label" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">{storeLocal.label}</label>
                                    <input type="text" className="w-full  bg-white-50 border border-gray-300"  onChange={event => handleLabelChange(event, storeLocal.value)}/>
                                </>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </Form>
      </LayoutProvider>
    );
}

export default withTabs(StoreEditForm);