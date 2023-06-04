import {
  CharacterDetailModel,
  CharactersListModel,
  GetResponse,
} from '#src/types/models';
import instance from './instance';

export const getCharactersListAPI = async () => {
  try {
    const res: GetResponse<CharactersListModel[]> = await instance.get(
      `/characters`,
    );

    return res;
  } catch (e) {
    console.log('getCharactersListAPI error', e);
    throw e;
  }
};

export const getCharactersDetailAPI = async ({
  charactersId,
}: {
  charactersId: number;
}) => {
  try {
    const res: GetResponse<CharactersListModel> = await instance.get(
      `/characters/${charactersId}`,
    );

    return res;
  } catch (e) {
    console.log('getCharactersDetailAPI error', e);
    throw e;
  }
};
