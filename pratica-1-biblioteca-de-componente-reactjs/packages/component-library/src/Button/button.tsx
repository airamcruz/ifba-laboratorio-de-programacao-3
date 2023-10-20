import ButtonStyle  from './buttom.style' ;
import { ButtonProps } from './buttom.type';

export const Button:React.FC<ButtonProps> = ({caption}) => {
    return (
        <ButtonStyle>{caption}</ButtonStyle>
    )
}
