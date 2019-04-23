import React, { useRef, useState } from "react";
import styled from "styled-components";

const Email = () => {
  const [copySuccess, setCopySuccess] = useState();
  const ref = useRef(null);

  const copyToClick = e => {
    ref.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Nice. Copied to clipboard!");
  };

  if (typeof window !== `undefined`) {
    return (
      <CopyEmail>
        makotodejima@gmail.com
        {/* Logical shortcut for only displaying the 
          button if the copy command exists */
        document.queryCommandSupported("copy") && (
          <div className="copyBtn">
            <button onClick={copyToClick}>Copy</button>
            <span>{copySuccess}</span>
          </div>
        )}
        <input
          readOnly
          style={{ opacity: 0 }}
          ref={ref}
          value="makotodejima@gmail.com"
        />
      </CopyEmail>
    );
  }
  return null;
};

export default Email;

const CopyEmail = styled.h4`
  text-align: "center";
  position: relative;
  .copyBtn {
    position: absolute;
    top: -2px;
    left: 0;
    transform: translateX(190px);
    button {
      margin-left: 2px;
      cursor: pointer;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 2px 5px;
      border-radius: 15px;
      border: black 2px solid;
      background-color: transparent;
      font-size: 0.8rem;
      &:active {
        transform: scale(0.96);
        background-color: black;
        color: white;
      }
    }
  }
  span {
    /* position: absolute; */
    /* transform: translateX(-50%); */
    /* margin-top: 20px; */
    font-weight: lighter;
    margin-left: 5px;
    color: darkgrey;

    /* ::before {
    content: "";
    position: absolute;
    top: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 10px solid grey;
    transform: translate(-50%, -100%);
    box-shadow: 0px 2px 50px -15px rgba(0, 0, 0, 0.5);
  } */
  }
  input {
    position: absolute;
    transform: translate(-3000px, -3000px); // put somewhere off the screen
  }
`;
