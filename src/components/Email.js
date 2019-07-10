import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Email = () => {
  const [copySuccess, setCopySuccess] = useState();
  const ref = useRef(null);

  const copyToClick = e => {
    ref.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(' Nice! Copied to clipboard.');
  };

  if (typeof window !== `undefined`) {
    return (
      <CopyEmail>
        makotodejima@gmail.com
        {/* Logical shortcut for only displaying the 
          button if the copy command exists */
        document.queryCommandSupported('copy') && (
          <>
            <div className="copyBtn">
              <button type="button" onClick={copyToClick}>
                Copy
              </button>
              <span>{copySuccess}</span>
            </div>
          </>
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
  text-align: left;
  position: relative;
  display: inline-block;
  .copyBtn {
    position: absolute;
    top: -2px;
    left: 203px;
    button {
      cursor: pointer;
      color: ${props => props.theme.primary};
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 2px 5px;
      border-radius: 15px;
      border: ${props => props.theme.primary} 2px solid;
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
    position: absolute;
    top: 2px;
    font-weight: lighter;
    width: 190px;
    margin-left: 6px;
    color: dimgrey;
  }
  input {
    position: absolute;
    transform: translate(-3000px, -3000px); // put somewhere off the screen
  }
`;
