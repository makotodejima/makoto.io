import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageTitle } from '../components/StyledComps';
import Email from '../components/Email';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled = () => {
    return fname === '' || lname === '' || email === '' || message === '';
  };

  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[
          `Makoto Dejima`,
          `JavaScript`,
          `Design`,
          `React`,
          `Front-End Developer`,
          `Graphic Design`,
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
              <label htmlFor="fname">
                First Name
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your first name.."
                  required
                  onChange={e => setFname(e.target.value)}
                />
              </label>
            </span>
            <span className="lname">
              <label htmlFor="lname">
                Last Name
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  required
                  onChange={e => setLname(e.target.value)}
                />
              </label>
            </span>
          </div>
          <label htmlFor="email">
            Your email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@madmak.com"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              placeholder="Your message.."
              required
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" disabled={isDisabled()}>
            Send
          </button>
        </form>
      </StyledForm>
      <SocialLinks />
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
        margin-right: 1rem;
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
      outline: 0;
      -webkit-appearance: none;
      margin: 1rem auto 1rem;
      transition: 0.3s;
      border: 0;
      border-bottom: 1px solid lightgrey;
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
      border-bottom: 1px solid lightgrey;
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
      padding: 0.4rem 1rem;
      border-radius: 20px;
      margin-top: 20px;
      width: 120px;
      text-align: center;
      background: black;
      color: #ffffff;
      border: none;
      cursor: pointer;
      transition: 200ms ease-in-out, transform 120ms ease;
      -webkit-appearance: none;
      -moz-appearance: none;
      &:disabled {
        background-color: rgba(200, 200, 200, 0.8);
        cursor: not-allowed;
        :hover,
        :focus {
          background-color: rgba(200, 200, 200, 0.8);
        }
      }
      &:hover,
      &:focus {
        background: #0076ff;
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
