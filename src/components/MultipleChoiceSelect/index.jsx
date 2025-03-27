import React, { useEffect, useState } from "react";
import Select from "react-select";
const MultiChoiceSelect = ({options,setValue,selectId ,maxLength , title = "Select an option" ,setParentOptions ,values}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
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
      />
  )
};

export default MultiChoiceSelect;
