import styled from 'styled-components'

export const ContentCard = styled.div`
  padding: 1rem;
  width: max-content;
  background-color: ${(props) => props.theme.colors.white};
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 20px 0px #333;

  .card {
    &__header {
      width: 12rem;
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: relative;

      &-img {
        object-fit: contain;
      }
    }
    &__body {
      width: 12rem;
      padding: 1.4rem 0.8rem;

      &--description {
        font-size: 0.8rem;
        line-height: 1.2;
        font-weight: 700;
        color: #383838;
      }
    }
  }
`
export const NormalHomeCard = styled.div`
  border-radius: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
