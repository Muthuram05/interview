import React, {useState} from 'react'
import axios from 'axios';
const One = () => {

        axios.get("https://pixabay.com/api/?key=26152324-baaad41c2a4e08cae4520d672&q=yellow+flowers&image_type=photo&pretty=true")
        .then((data)=> console.log(data.data.hits[0].pageURL))

    
    const color = ["red","green","black","yellow","orange","purple","violet"]
    const [result,setResult] = useState([]);
    function handleInput(e){
       let data = e.target.value
       const test = color.filter((val)=> val.toLowerCase().includes(data.toLowerCase()) )
       setResult(test)
    }

    return (
        <div>
            <input onChange={handleInput}/>
            {result.map((e)=>{
                return <li>{e}</li>
            })}
        </div>
    )
}

export default One