import React from "react";
// import { useSpring, animated } from "react-spring";

class BackToTopBtn extends React.Component {
  state = { intervalId: 0 };

  scrollUp = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    // Scroll up by 50px each time this is called
    window.scroll(0, window.pageYOffset - 30);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollUp, 10); // 20 ms
    this.setState({ intervalId });
  };

  render() {
    return (
      <button className="toTop" onClick={this.scrollToTop}>
        Press to top
      </button>
    );
  }
}

export default BackToTopBtn;
