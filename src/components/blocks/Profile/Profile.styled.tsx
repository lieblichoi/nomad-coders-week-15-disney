import styled from 'styled-components';

interface SizeProps {
  size: 'sm' | 'md';
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const Image = styled.img<SizeProps>`
  width: ${(props) => (props.size === 'sm' ? '100px' : '150px')};
  height: auto;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
`;

const Name = styled.h3<SizeProps>`
  ${(props) =>
    props?.size === 'sm'
      ? `
          width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;`
      : ``}
  font-size: ${(props) => (props.size === 'sm' ? '18px' : '24px')};
  font-weight: 500;
  color: ${(props) => props.theme.colors.mono.black};
`;

export { Container, Image, Name };
