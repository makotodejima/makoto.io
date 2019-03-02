import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          {/* FOTTER */}
          <footer className="bg-blue-darker">
            <div className="flex justify-around max-w-xs mx-auto p-4 md:p-6 text-sm">
              <p className="work">
                <a
                  href="https://taylorbryant.blog"
                  className="font-bold no-underline text-white"
                >
                  Work
                </a>
              </p>
              <p className="about">
                <a
                  href="https://taylorbryant.blog"
                  className="font-bold no-underline text-white"
                >
                  About
                </a>
              </p>
              <p className="contact">
                <a
                  href="https://taylorbryant.blog"
                  className="font-bold no-underline text-white"
                >
                  Contact
                </a>
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
