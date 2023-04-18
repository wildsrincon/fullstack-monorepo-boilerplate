import { Component } from 'react';
import type { ReactNode } from 'react';
import { ErrorMessage } from '../shared/ErrorMessage';

interface Props {
  children: ReactNode;
  // fallbackComponent: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render(): ReactNode {
    const { hasError, error } = this.state;
    if (hasError && error !== undefined) return <ErrorMessage error={error} />;
    return this.props.children;
  }
}
