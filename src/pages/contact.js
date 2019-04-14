import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

class ContactPage extends React.Component {
  render() {
    return (
      <Layout currentPath={this.props.location.pathname}>
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
        <Intro>
          <p>
            I love to design, develop, and write. <br />
            Please feel free to contact me at makotodejima@gmail.com. or using
            the form below.
          </p>
          <p>
            デザイン、開発、執筆が好きです。
            <br />
            Eメール、または下記のフォームからどうぞお気軽にご連絡ください。
          </p>
          <h4>makotodejima@gmail.com</h4>
        </Intro>
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
  }
}
export default ContactPage;

const Intro = styled.div`
  text-align: center;
  line-height: 2;
  p {
    margin: 1rem;
  }
`;

const StyledForm = styled.div`
  padding: 2rem;
  margin: 0 auto;
  width: 50%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      display: flex;
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
      height: 100px;
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
      margin: 0 auto;
      text-align: center;
      background: black;
      color: #ffffff;
      cursor: pointer;
      transition: 250ms ease-in-out, transform 150ms ease;
      -webkit-appearance: none;
      -moz-appearance: none;
      &:hover,
      &:focus {
        background: grey;
      }
      &:active {
        transform: scale(0.95);
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
