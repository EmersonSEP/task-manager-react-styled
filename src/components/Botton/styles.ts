import styled from 'styled-components';

interface ColorsBotton {
  [key: string]: string,
};

const colorsBotton: ColorsBotton = {
  success: "green",
  alert: "yellow",
  error: "red",
};

interface BottonDefaultProps {
  cor: string;
}

export const BottonDefault = styled.button<BottonDefaultProps>`
  border:none;
  background-color: ${(props) => colorsBotton[props.cor] };
  color:#fff;
  border-radius:20px;
  padding: 10px 30px;
`;