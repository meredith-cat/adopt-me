// CP React Docs!

import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //log to Error Monitoring service
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to return to
          the home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
