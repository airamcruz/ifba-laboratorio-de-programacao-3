import { LayoutSpliterContext } from "../../contexts/LayoutSpliterContext";
import { LayoutSpliterContainerStyle } from "./LayoutSpliterContainer.style";
import { LayoutSpliterContainerProps } from "./LayoutSpliterContainer.type";


export function LayoutSpliterContainer({orientacao, children, ...rest} : LayoutSpliterContainerProps) {

    return (        
        <LayoutSpliterContext.Provider value={{orientacao: orientacao}}> 
            <LayoutSpliterContainerStyle orientacao={orientacao} {...rest}>
                {children}
            </LayoutSpliterContainerStyle>
        </LayoutSpliterContext.Provider>
    )    
}