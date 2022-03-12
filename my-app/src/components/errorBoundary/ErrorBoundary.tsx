import React, { ReactNode } from 'react';

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
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
