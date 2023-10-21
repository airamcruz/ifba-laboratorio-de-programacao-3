import ButtonStyle  from './buttom.style' ;
import { ButtonProps } from './buttom.type';

export const Button:React.FC<ButtonProps> = ({caption}) => {
    return (
        <>
             <div>
                <p>Monorepo com TurboRepo</p>
            </div>
            <div>
                <ButtonStyle>{caption}</ButtonStyle>
            </div>
        </>
    )
}
