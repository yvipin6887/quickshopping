import React, { useState} from 'react';

import Select from 'react-select';

const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

let multiData = {};




const SimpleSelectOption = () => {
    const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
      />
    </>
  );
}


const MultiSelectOption = (options) => {
  // const [state, setState] = useState(list);
  // console.log(state);
  // setMultiData(...multiData, list);
    multiData = options;
    return (
    <Select
      defaultValue={multiData[0]}
      isMulti
      name="colors"
      options={multiData}
      className="basic-multi-select"
      classNamePrefix="select"
    />
    );
};

export  {
    MultiSelectOption,
    SimpleSelectOption
};