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
  padding: 108px 36px 36px 36px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.mono.black};
`;

const IsLoading = styled.h2`
  width: 100%;
  color: ${(props) => props.theme.colors.mono.black};
`;

const List = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: fit-content;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const GoBack = styled.button`
  position: fixed;
  top: 36px;
  left: 36px;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mono.black};
`;

export { Wrapper, Title, IsLoading, List, GoBack };
