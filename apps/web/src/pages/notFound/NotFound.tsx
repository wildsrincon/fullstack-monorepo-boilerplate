import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
