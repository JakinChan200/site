import Typewriter from 'typewriter-effect';
// import React from "react";

export default function TypingEffect() { 
    return ( 
      <div> 
        <Typewriter 
          onInit={(typewriter) => { 
            typewriter.typeString('Hello World!') 
              .callFunction(() => { 
                console.log('String typed out!'); 
              }) 
              .pauseFor(2500) 
              .deleteAll() 
              .callFunction(() => { 
                console.log('All strings were deleted'); 
              }) 
              .start(); 
          }} 
        />
      </div> 
    ); 
}