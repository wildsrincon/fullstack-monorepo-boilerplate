import { Layout } from '../../styled-components/layout.styled';
import { HomeTitle } from '../../styled-components/title.styled';
import { CreateUserBtn, ModifyUserBtn, ResetUserBtn } from './components';

export function Home(): JSX.Element {
  return (
    <Layout>
      <HomeTitle>Home Page</HomeTitle>
      <CreateUserBtn />
      <ModifyUserBtn />
      <ResetUserBtn />
    </Layout>
  );
}
