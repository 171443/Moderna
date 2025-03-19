import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught in boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return(
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h1>Something went wrong!</h1>
                    <p>{this.state.error?.message || 'An unextected error occurred.'}</p>
                    <button onClick={() => this.setState({ hasError: false })}>Try Again</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;