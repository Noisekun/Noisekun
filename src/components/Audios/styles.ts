import styled from 'styled-components';

const AudiosBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

export default AudiosBlock;
