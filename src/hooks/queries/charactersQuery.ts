import { useMutation, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import {
  getCharactersListAPI,
  getCharactersDetailAPI,
} from '#src/api/characters';

export const useCharactersList = () => {
  return useQuery(['CHARACTERS_LIST'], getCharactersListAPI);
};

export const useCharactersDetail = (charactersId: number) => {
  return useQuery(
    ['CHARACTERS_DETAIL', charactersId],
    () => getCharactersDetailAPI({ charactersId }),
    {
      enabled: !!charactersId,
    },
  );
};
