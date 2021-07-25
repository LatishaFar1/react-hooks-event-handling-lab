// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function eyesButton(event){
        console.log(event);
    }
    return(
    <button onBlur={console.log("Hey! Eyes on me!")} onFocus={console.log("Good!")}>Eyes On Me</button>

    );
    
};




export default EyesOnMe;