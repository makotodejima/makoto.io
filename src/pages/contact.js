import React, { useState, useRef } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageTitle } from "../components/StyledComps";

const ContactPage = props => {
  const [copySuccess, setCopySuccess] = useState();
  const ref = useRef(null);

  const copyToClick = e => {
    ref.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied to clipboard!");
  };

  return (
    <Layout currentPath={props.location.pathname}>
      <SEO
        title="Contact"
        keywords={[
          `Makoto Dejima`,
          `Designer`,
          `Front-End Developer`,
          `Design`,
          `Graphic Design`,
          `JavaScript`,
          `React`,
          `Motion`
        ]}
      />
      <PageTitle>Contact</PageTitle>
      <Intro>
        <p>Please feel free to contact me via email or the form below.</p>
        <p>
          Eメール、LinkedIn、または下記のフォームからお気軽にご連絡ください。
        </p>
      </Intro>
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

      <StyledForm className="form-container">
        <form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <div className="name">
            <span className="fname">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your first name.."
                required
              />
            </span>
            <span className="lname">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                required
              />
            </span>
          </div>
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            placeholder="Your message.."
            required
          />
          <button type="submit">Send</button>
        </form>
      </StyledForm>
    </Layout>
  );
};

export default ContactPage;

const Intro = styled.div`
  line-height: 2;
  margin-bottom: 2rem;
  p {
    margin: 1rem 0;
  }
`;

const CopyEmail = styled.h4`
  text-align: "center";
  position: relative;
  .copyBtn {
    position: absolute;
    top: -2px;
    left: 0;
    transform: translateX(190px);
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

const StyledForm = styled.div`
  /* border-top: 1px solid black; */
  padding: 2rem;
  margin: 2rem auto 0;
  width: 70%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      display: flex;
      span:nth-child(1) {
        margin-right: 0.5rem;
      }
      span {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
      }
      input {
        width: 100%;
        margin: 1rem 0 0 0;
      }
    }
    input {
      width: 100%;
      padding: 15px;
      border: 0;
      outline: 0;
      -webkit-appearance: none;
      margin: 1rem auto 1rem;
      transition: 0.3s;
      &:focus {
        border-bottom: 1px solid grey;
        background: whitesmoke;
      }
    }
    textarea {
      height: 120px;
      vertical-align: middle;
      width: 100%;
      padding: 20px;
      border: 0;
      outline: 0;
      -webkit-appearance: none;
      margin: 1rem 0 1rem;
      transition: 0.3s;
      &:focus {
        border-bottom: 1px solid grey;
        background: whitesmoke;
      }
    }
    button {
      display: inline-block;
      padding: 0.6rem 2rem;
      margin: 1rem auto 0;
      text-align: center;
      background: black;
      color: #ffffff;
      cursor: pointer;
      transition: 200ms ease-in-out, transform 150ms ease;
      -webkit-appearance: none;
      -moz-appearance: none;
      &:hover,
      &:focus {
        background: darkcyan;
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
  @media only screen and (max-width: 767px) {
    width: 70%;
    form {
      .name {
        flex-direction: column;
        span {
          margin: 0.6rem 0;
        }
      }
    }
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;
