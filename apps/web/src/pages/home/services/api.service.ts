import type { User } from '@/models/user.model';
import { HomeAdapter } from '../adapter/home.adapter';

export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/2';

export const fetchMorty = async (url: string): Promise<User> => {
  return await fetch(url)
    .then(async (res) => await res.json())
    .then((res) => HomeAdapter(res));
};
