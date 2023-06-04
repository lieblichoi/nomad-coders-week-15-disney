import Profile from '#components/blocks/Profile';
import { CharactersListModel } from '#src/types/models';
import { Button, IsLoading, List, Title, Wrapper } from './home.styled';
import DarkModeToggle from '#components/blocks/DarkModeToggle';

interface HomePageTemplateProps {
  charactersList?: CharactersListModel[];
  isLoading: boolean;
  loader: React.MutableRefObject<HTMLDivElement | null>;
}

const HomePageTemplate = ({
  charactersList,
  isLoading,
  loader,
}: HomePageTemplateProps) => {
  return (
    <Wrapper>
      <Title>Disney Characters</Title>
      {isLoading ? (
        <IsLoading>Loading...</IsLoading>
      ) : (
        <List>
          {charactersList?.map((characters) => (
            <Button to={`/character/${characters.id}`} key={characters.id}>
              <Profile info={characters} />
            </Button>
          ))}
        </List>
      )}
      <div ref={loader}>Load More</div>
    </Wrapper>
  );
};

export default HomePageTemplate;
