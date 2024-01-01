import React, { useState } from 'react'


const Input = (props,onData) => {
  const [searchItem,setSearchItem] = useState('')
  const [filterOption,setfilter] = useState([])
  const options = props.color
  const handleChange = (event) =>{
    const { value } = event.target;
    // console.log(value)
    setSearchItem(value);
    const filtered = options.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    // console.log(filtered)
    setfilter(filtered);
      // setValue(events.target.value);
  }
  const handleSelectOption = (option)=>{
    setSearchItem(option);
    setfilter([]) 
    props.onData(option)
  }
  return (
    <div>
       <input type='text' 
       value={searchItem} 
       onChange={handleChange}
       placeholder='search color'/>
       <ul>
        {filterOption.map((options,index) =>(
          <li key={index} onClick={() => handleSelectOption(options)}>
            {options}
            
            </li>
        )
        )}
       </ul>
    </div>
  )
}

export default Input