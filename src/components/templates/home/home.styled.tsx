import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Name } from '#components/blocks/Profile/Profile.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: center;
  width: 100%;
  gap: 36px;
  padding: 36px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.mono.black};
`;

const IsLoading = styled.h2`
  width: 100%;
  color: ${(props) => props.theme.colors.mono.black};
`;

const List = styled.article`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Button = styled(Link)`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 24px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.mono.white};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.colors.mono.black};
      ${Name} {
        color: ${(props) => props.theme.colors.mono.white};
      }
    }
  }
`;

export { Wrapper, Title, IsLoading, List, Button };
