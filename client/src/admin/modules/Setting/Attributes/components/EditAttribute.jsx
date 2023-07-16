import React,{useState} from "react";
import { useForm } from 'react-hook-form';

import Select from 'react-select';

import { useTabs, withTabs} from "../../../../components/Context/TabsContext";
import { Tabs, Tab } from "../../../../components/Tabs";
import { LayoutProvider } from "../../../../components/LayoutProvider";
import { Form } from "../../../../components/Form";

const EditAttribute = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [attributeLabel, setAttributeLabel] = useState({});
  const [attributeType, setAttributeType] = useState({});
  const [attributeGroup, setAttributeGroup] = useState({});

  const { setCurrentTab } = useTabs();
  const tabs = {
        firstTab: 'Properity',
        secondTab: 'Label'
    }

    const storeLocales = [
        {value: 'en_US', label: 'English'},
        {value: 'en_GN', label: 'German'},
    ];

    const attributeTypes = [
        {value: 'text', label: 'Text'},
        {value: 'text-area', label: 'Text Area'},
        {value: 'radio', label: 'Radio'},
        {value: 'simple-select', label: 'Simple Select'},
        {value: 'muli-select', label: 'Milt Select'},
    ];

    const attributeGroups = [
      {value: 'text', label: 'Text'},
      {value: 'text-area', label: 'Text Area'},
      {value: 'radio', label: 'Radio'},
      {value: 'simple-select', label: 'Simple Select'},
      {value: 'muli-select', label: 'Milt Select'},
  ];


    const handleLabelChange = (event, locale='') => {;
      attributeLabel[locale] = event.target.value;
      setAttributeLabel(attributeLabel);
      register('label', {value: attributeLabel});
    }
    
    const handleAttrybiteTypeChange = (attributeType) => {
      setAttributeType(attributeType);
      register('attributeType', {value: attributeType.value});
    }

    const handleAttrybiteGroupChange = (attributeGroup) => {
      setAttributeGroup(attributeGroup);
      register('attributeGroup', {value: attributeGroup.value});
    }

    return (
      <LayoutProvider className={`h-[500px]`}>
        <Form btnTitle='Save' handleSubmit={handleSubmit} errors={errors}>
          <Tabs tabs={tabs} defaultTab={tabs.firstTab} onTabSelect={(tab) => setCurrentTab(tab)} className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark: text-gray-700">
              <Tab id={tabs.firstTab}>
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
                <div className="max-w-md mb-6">
                  <label for="label" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Attribute group</label>
                  <Select
                      defaultValue={attributeGroup}
                      name="attributeType"
                      options={attributeGroups}
                      className="basic-select"
                      classNamePrefix="select"
                      onChange={handleAttrybiteGroupChange}
                      />
                </div>
                <div className="max-w-md mb-6 text-left">
                  <label for="localwise" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local wise</label>
                  <label class="relative inline-flex items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"  />
                      <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  {/* {errors.code && <p>{errors.code.message}</p>} */}
                </div>
                
              </Tab>
              <Tab id={tabs.secondTab}>
                <div className="max-w-md  mb-6">
                  {storeLocales.map(storeLocal => (
                    <>
                       <label for="label" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">{storeLocal.label}</label>
                        <input type="text" className="w-full  bg-white-50 border border-gray-300" value={attributeLabel[storeLocal.value]} onChange={event => handleLabelChange(event, storeLocal.value)}/>
                    </>
                  ))}
                   
                </div>
              </Tab>
          </Tabs>
        </Form>
      </LayoutProvider>
    );
}

export default withTabs(EditAttribute);