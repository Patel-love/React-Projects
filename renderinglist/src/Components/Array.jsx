import React, { useRef } from 'react'

function Array() {
    const colors = ["Black","Red", "Yellow", "LightGreen", "LightBlue", "Orange", ];
    const colorRef = useRef(null);
    let index = 0;
  
    const updateColor = () => {
      if (colorRef.current) {
        colorRef.current.style.color = colors[index];
        colorRef.current.textContent = colors[index];
      }
    };
  
    const handleNext = () => {
      index = (index + 1) % colors.length;
      updateColor();
    };
  
    const handlePrev = () => {
      index = (index - 1 + colors.length) % colors.length;
      updateColor();
    };
    console.log(updateColor);
  return (
    <>
     <div style={{backgroundColor:"#85929e  ",padding:"10px",textAlign:"center"}}>
      <div ref={colorRef} style={{ fontSize: '4em', color: colors[0] }}>
        {colors[0]}
      </div>
      <button onClick={handlePrev} style={{margin:"10px"}}>Prev</button>
      <button onClick={handleNext} style={{margin:"10px"}}>Next</button>
    </div>
    </>
  )
}

export default Array