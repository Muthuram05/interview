import React from 'react'

const Nav = (props) => {
  return (
    <div style={{fontSize:'100px'}}>
        hello user <span style={{color:'red'}}>{props.data}</span>
    </div>
  )
}

export default Nav