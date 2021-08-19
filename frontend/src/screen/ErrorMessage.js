import React from 'react'
const ErrorMessage = ({variant,children,top})=>{
    return (<div style={{position: 'absolute',top:top,left: '50%',transform: 'translate(-50%, -50%)',width:'30rem'}} class={`ui ${variant} message`}>
    {/* <i class="close icon"></i> */}
    <div style={{}}>
      {children}
    </div>
  </div>)
}



export default ErrorMessage


