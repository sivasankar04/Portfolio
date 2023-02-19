import React from "react";
import styled, { keyframes } from 'styled-components';

const NameComponent = ({ text }) => {
    const nameArr = text.split('')
    return (
        <div>
            <Name>
                {nameArr.map((val, index) => {
                    return (
                        <span key={index}>
                            {val}
                        </span>
                    )
                })}

            </Name>
        </div>
    )
}
const animation = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(-100px); 
    color:rgb(255, 165, 0);
    filter:blur(5px)
  }
  25% { 
    opacity: 1; 
    transform: translateY(0px);
    color:rgb(255, 165, 0);
    filter:blur(0px)

   }
  75% { 
    opacity: 1;
    color:rgb(255, 165, 0);
    transform: translateY(0px); 
    filter:blur(0px)
    }
  100% {
    opacity: 1; 
    color:white;

  }
`

const Name = styled.span`
  font-size:30px;
  font-weight:bold;
  display:inline-block;
  font-family:Playfair Display,sans-serif;
  span{
    display:inline-block;
    opacity:0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function:cubic-bezier(0.075,0.82,0.165,1)
  }
  span:nth-child(1){
    animation-delay:0.3s
  }
  span:nth-child(2){
    animation-delay:0.6s
  }  span:nth-child(3){
    animation-delay:0.9s
  }
`
export default NameComponent