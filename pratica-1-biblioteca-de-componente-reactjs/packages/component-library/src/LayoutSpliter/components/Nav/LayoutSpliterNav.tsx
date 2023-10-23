import { useContext } from "react";
import { LayoutSpliterContext } from "../../contexts/LayoutSpliterContext";
import { LayoutSpliterNavStyle } from "./LayoutSpliterNav.style";
import { LayoutSpliterNavProps } from "./LayoutSpliterNav.type";


export function LayoutSpliterNav({ children, ...rest} : LayoutSpliterNavProps) {
    
    const layoutContext = useContext(LayoutSpliterContext);
    
    return (
        <LayoutSpliterNavStyle orientacao={layoutContext.orientacao} {...rest}>
            {children}
        </LayoutSpliterNavStyle>
    )    
}