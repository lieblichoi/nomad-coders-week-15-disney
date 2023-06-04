import { CharactersListModel } from '#src/types/models';
import { Container, Image, Name } from './Profile.styled';

interface ProfileProps {
  info: CharactersListModel | undefined;
  size?: 'sm' | 'md';
}

const Profile = ({ info, size = 'sm' }: ProfileProps) => {
  const profileImage = info?.imageUrl
    ? info?.imageUrl
    : '/images/default_profile.jpg';

  return (
    <Container>
      <Image size={size} src={profileImage} loading='lazy' />
      <Name size={size}>{info?.name}</Name>
    </Container>
  );
};

export default Profile;
