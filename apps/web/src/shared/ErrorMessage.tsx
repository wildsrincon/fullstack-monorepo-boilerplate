import { Layout } from '../styled-components/layout.styled';
interface Props {
  error: Error;
}

export const ErrorMessage = ({ error }: Props): JSX.Element => {
  return (
    <Layout>
      <h1>Something went wrong</h1>
      <h2>{error.message}</h2>
    </Layout>
  );
};
