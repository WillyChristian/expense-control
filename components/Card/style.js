import styled from 'styled-components'

export const ContentCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0px 10px 20px 0px #333;
  margin: 1rem;
  padding: 1rem;
  width: max-content;

  .card {
    &__header {
      align-items: flex-start;
      display: flex;
      height: 6rem;
      justify-content: center;
      position: relative;
      width: 12rem;

      &-img {
        object-fit: contain;
      }
    }
    &__body {
      padding: 1.4rem 0.8rem;
      width: 12rem;

      &--description {
        color: #383838;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 1.2;
      }
    }
  }
`
export const NormalHomeCard = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
