import { useDispatch } from 'react-redux';
import { modifyUser } from '@/redux/slices/user.slice';
import { ButtonDispatch } from '@/styled-components/btnDispatch.styled';

export default function ModifyUserBtn(): JSX.Element {
  const dispatch = useDispatch();

  const dispatchActions = (): void => {
    dispatch(modifyUser({ name: 'Wilds Rincon', id: 1 }));
  };

  return (
    <ButtonDispatch type="button" onClick={dispatchActions}>
      Dispatch Modify Action
    </ButtonDispatch>
  );
}
