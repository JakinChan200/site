import Typewriter from 'typewriter-effect';
// import React from "react";

export type Props = {
  message: string;
  typePause: Speed;
}

function TypingEffect({message, typePause = 'natural'}: Props) { 
    return ( 
      <div> 
        <Typewriter
          options={{
            strings: [message],
            autoStart: true,
            loop: true,
            delay: typePause,
          }}
        />
      </div> 
    ); 
}

export default TypingEffect;