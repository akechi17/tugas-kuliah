import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem',
            backgroundColor: '#0d0d0d',
            color: '#B7AB98',
            textAlign: 'center'
          }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', maxWidth: '600px' }}>
            We apologize for the inconvenience. The site encountered an unexpected error.
            Please try refreshing the page.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              backgroundColor: '#B7AB98',
              color: '#0d0d0d',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details
              style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#1a1a1a',
                borderRadius: '4px',
                textAlign: 'left',
                maxWidth: '800px'
              }}
            >
              <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                Error Details (Development)
              </summary>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.875rem' }}>
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
