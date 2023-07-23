import { UserEmptyState } from '../../../models';
import { fetchMorty, rickAndMortyUrl } from '../services/api.service';
import { createUser } from '@/redux/slices/user.slice';
import type { AppDispatch } from '@/redux/store';
import { ButtonDispatch } from '@/styled-components/btnDispatch.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CreateUserBtn(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [morty, setMorty] = useState(UserEmptyState);
  const getCharacter = async (): Promise<void> => {
    const result = await fetchMorty(rickAndMortyUrl);
    setMorty(result);
  };

  useEffect(() => {
    void getCharacter();
  }, []);

  const dispatchActions = (): void => {
    dispatch(createUser(morty));
  };

  return (
    <ButtonDispatch type="button" onClick={dispatchActions}>
      Dispatch Create Action
    </ButtonDispatch>
  );
}
