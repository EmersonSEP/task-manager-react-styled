import {BottonDefault} from "./styles"

interface BottonProps {
  text: string;
  action?: () => void;
  cor: string;
}

export default function Botton(props: BottonProps) {
  return (
  <BottonDefault cor={props.cor} onClick={props.action}>{props.text}
  </BottonDefault>
  
  );
}
