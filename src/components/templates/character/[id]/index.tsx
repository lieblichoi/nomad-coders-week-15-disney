import Profile from '#components/blocks/Profile';
import { CharacterDetailModel, CharactersListModel } from '#src/types/models';
import { GoBack, IsLoading, List, Title, Wrapper } from './index.styled';
import DarkModeToggle from '#components/blocks/DarkModeToggle';
import { Tag } from '#components/atoms';

interface CharacterPageTemplateProps {
  info: CharactersListModel | undefined;
  isLoading: boolean;
  onGoBackClick: () => void;
}

const CharacterPageTemplate = ({
  info,
  isLoading,
  onGoBackClick,
}: CharacterPageTemplateProps) => {
  return (
    <Wrapper>
      {isLoading ? (
        <IsLoading>Loading...</IsLoading>
      ) : (
        <>
          <GoBack onClick={onGoBackClick}>&larr;</GoBack>
          <Profile info={info} size='md' />
          <Title>Films</Title>
          <List>
            {info?.films?.map((films) => (
              <Tag key={films} text={films}></Tag>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default CharacterPageTemplate;
