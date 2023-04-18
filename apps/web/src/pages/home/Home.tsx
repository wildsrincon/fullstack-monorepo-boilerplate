import { Layout } from '../../styled-components/layout.styled';
import { CreateUserBtn, ModifyUserBtn, ResetUserBtn } from './components';
import { HomeTitle } from '../../styled-components/title.styled';

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
