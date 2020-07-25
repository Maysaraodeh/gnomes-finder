import React from 'react';
import { NetworkError } from 'components/Errors';
import './style.css';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // just for now other wise there will be a redirect or whatever logic.
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <NetworkError />
          <h4>Something went wrong!</h4>
          <button onClick={() => this.refreshPage()} className="btn-primary">
            Go Back
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
