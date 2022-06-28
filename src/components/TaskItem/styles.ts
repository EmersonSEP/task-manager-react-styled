import styled, { css } from 'styled-components';

interface ItemProps {
  done?: boolean;
}

export const Item = styled.li<ItemProps>`
  text-align: center;
  display: flex;
  justify-content: space-between;

  img{
    width:20px;
    height: 20px;
  }

  ${(props) => 
  (props.done 
    ? css`
    text-decoration: line-through;
    color: gray;
    cursor: not-allowed;
  ` : '')}
`;