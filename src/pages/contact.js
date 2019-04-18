import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageTitle } from "../components/StyledComps";
import Email from "../components/Email";

const ContactPage = props => {
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
        <p>Eメール、または下記のフォームからお気軽にご連絡ください。</p>
      </Intro>

      <Email />

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
  margin-bottom: 1rem;
  p {
    margin: 1rem 0;
  }
`;

const StyledForm = styled.div`
  /* border-top: 1px solid black; */
  padding: 2rem 0;
  margin: 2rem 0 0;
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
      margin-top: 20px;
      width: 150px;
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
