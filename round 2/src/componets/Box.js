import React from 'react'
import './Box.css'
const Box = (props) => {
    console.log(props)
  return (
    <section >
        {props.data.map((e,i)=>{
            return <>
            <div className='Box' key={i}>
            <div className='color'></div>
                <h1>{e.name}</h1>
                <span>{e.msg}</span>
            </div>
            </>
        })}
    </section>

  )
}

export default Box