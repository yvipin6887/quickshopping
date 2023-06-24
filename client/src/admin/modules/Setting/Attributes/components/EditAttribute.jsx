import React from "react";
import { useForm } from 'react-hook-form';

import Select from 'react-select';

import { useTabs, withTabs} from "../../../../components/Context/TabsContext";
import { Tabs, Tab } from "../../../../components/Tabs";
import { LayoutProvider } from "../../../../components/LayoutProvider";
import { Form } from "../../../../components/Form";


const EditAttribute = () => {
  const { setCurrentTab } = useTabs();
  const tabs = {
        firstTab: 'Properity',
        secondTab: 'Label'
    }

    const storeLocales = [
        {value: 'en_US', label: 'English'},
        {value: 'en_GN', label: 'German'},
    ];

    const attributeType = [
        {value: 'text', label: 'Text'},
        {value: 'text-area', label: 'Text Area'},
        {value: 'radio', label: 'Radio'},
        {value: 'simple-select', label: 'Simple Select'},
        {value: 'muli-select', label: 'Milt Select'},
    ];


    const handleLocaleChange = (value) => {
      let locales = value.map((locale, index) => {
          return locale.value;
      });
      // register('locales', {value: locales});
    }
    
    const handleAttrybiteTypeChange = (attributeType) => {
      // register('attributeType', {value: attributeType.value});
    }

    return (
      <LayoutProvider height="h-[500px]">
        <Form btnTitle='Save'>
          <Tabs tabs={tabs} defaultTab={tabs.firstTab} onTabSelect={(tab) => setCurrentTab(tab)} className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark: text-gray-700">
              <Tab id={tabs.firstTab}>
                <div className="max-w-md mb-6">
                  <label for="code" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Code</label>
                  <input type="text" className="w-full bg-white-50 border border-gray-300"/>
                  {/* {errors.code && <p>{errors.code.message}</p>} */}
              </div>
              <div className="max-w-md mb-6">
                  <label for="label" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Type</label>
                  <Select
                      defaultValue={null}
                      name="attributeType"
                      options={attributeType}
                      className="basic-select"
                      classNamePrefix="select"
                      onChange={handleAttrybiteTypeChange}
                      />
                </div>
              </Tab>
              <Tab id={tabs.secondTab}>
                <div className="max-w-md  mb-6">
                  {storeLocales.map(storeLocal => (
                    <>
                       <label for="label" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">{storeLocal.label}</label>
                    <input type="text" className="w-full  bg-white-50 border border-gray-300" />
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