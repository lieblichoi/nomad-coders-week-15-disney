import CharacterPageTemplate from '#components/templates/character/[id]';
import { useCharactersDetail } from '#hooks/queries/charactersQuery';
import { useParams, useNavigate } from 'react-router-dom';

const CharacterPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const characterId = Number(param.id);
  const { data, isLoading } = useCharactersDetail(characterId);

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <CharacterPageTemplate
      info={data?.data}
      isLoading={isLoading}
      onGoBackClick={handleGoBackClick}
    />
  );
};

export default CharacterPage;
