import React, { useEffect, useState } from "react";
import Select from "react-select";
const MultiChoiceSelect = ({options,setValue,selectId ,maxLength , title = "Select an option" ,setParentOptions ,values , placeholder}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    control: (base) => ({
      ...base,
      paddingTop: '0.25rem', // 0.25rem top padding
      paddingBottom: '0.25rem', // 0.25rem bottom padding
    }),
    menu: (base) => ({
      ...base,
      paddingTop: '0.25rem', // 0.25rem top padding for the dropdown
      paddingBottom: '0.25rem', // 0.25rem bottom padding for the dropdown
    }),
  };
  useEffect(()=>{
    if(values){
      setSelectedOption(values)
    }
  },[values])
  const handleOnChange = (selected)=>{
    if(maxLength && selected.length > maxLength ){
      alert(`max length is ${maxLength}`);
      return;
    } else{
      setValue(selectId,selected.map((s)=>s.id));
      setSelectedOption(selected)
      if(setParentOptions){
        setParentOptions(selected)
      }
    }
  }
  
  return(
      <Select
        isMulti={true}
        options={options}
        onChange={handleOnChange}
        value={selectedOption}
        getOptionLabel={(e) => e.title} // Use the title as the label
        getOptionValue={(e) => e.id} // Use the id as the value
        placeholder={placeholder}
        styles={customStyles}
      />
  )
};

export default MultiChoiceSelect;
