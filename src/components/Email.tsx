import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Email = () => {
  const [copySuccess, setCopySuccess] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  const copyToClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.select();
    }
    document.execCommand('copy');
    // e.target.focus();
    setCopySuccess(' Nice! Copied to clipboard.');
  };

  const email = 'makotodejima@gmail.com';

  if (typeof window !== `undefined`) {
    return (
      <CopyEmail>
        <h4>{email}</h4>
        {/* Logical shortcut for only displaying the 
          button if the copy command exists */
        document.queryCommandSupported('copy') && (
          <>
            <div className="copyBtn-wrapper">
              <button
                className="copyBtn-button"
                aria-label="Copy email address to clipboard"
                type="button"
                onClick={copyToClick}
              >
                Copy
              </button>
            </div>
            <h4 className="copy-success">{copySuccess}</h4>
          </>
        )}
        <label htmlFor="email-to-copy">
          <input
            id="email-to-copy"
            tabIndex={-1}
            readOnly
            style={{ opacity: 0 }}
            ref={ref}
            value={email}
          />
        </label>
      </CopyEmail>
    );
  }
  return null;
};

export default Email;

const CopyEmail = styled.div`
  display: flex;
  .copyBtn-wrapper {
    position: relative;
    .copyBtn-button {
      position: absolute;
      top: -2px;
      left: 8px;
      cursor: pointer;
      color: ${(props) => props.theme.primary};
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 0 5px;
      border-radius: 15px;
      border: ${(props) => props.theme.primary} 2px solid;
      background-color: transparent;
      font-size: 0.8rem;
      &:active,
      &:focus {
        transform: scale(0.95);
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.bg};
      }
    }
  }
  .copy-success {
    font-weight: lighter;
    margin-left: 60px;
    color: ${(props) => props.theme.secondary};
  }
  input {
    position: absolute;
    transform: translate(-3000px, -3000px); // put somewhere off the screen
  }
`;
