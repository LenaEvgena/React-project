import React, { ReactNode } from 'react';
import './ErrorBoundary.scss';

interface PropsType {
  children: ReactNode;
}

interface StateType {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(err: Error): StateType {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error_header">
          <h1>Something went wrong</h1>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
