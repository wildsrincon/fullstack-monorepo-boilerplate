import { useDispatch } from 'react-redux';
import { resetUser } from '@/redux/slices/user.slice';
import { ButtonDispatch } from '@/styled-components/btnDispatch.styled';

export default function ResetUserBtn(): JSX.Element {
  const dispatch = useDispatch();

  const dispatchActions = (): void => {
    dispatch(resetUser());
  };

  return (
    <ButtonDispatch type="button" onClick={dispatchActions}>
      Dispatch Reset Action
    </ButtonDispatch>
  );
}
