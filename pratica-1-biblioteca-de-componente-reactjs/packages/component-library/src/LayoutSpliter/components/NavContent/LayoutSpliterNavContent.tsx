import { useContext } from "react";
import { LayoutSpliterNavContentStyle } from "./LayoutSpliterNavContent.style";
import { LayoutSpliterNavContentProps } from "./LayoutSpliterNavContent.type";
import { LayoutSpliterContext } from "../../contexts/LayoutSpliterContext";

export function LayoutSpliterNavContent({ children, ...rest } : LayoutSpliterNavContentProps) {
    
    const layoutContext = useContext(LayoutSpliterContext);

    return (
        <LayoutSpliterNavContentStyle orientacao={layoutContext.orientacao} {...rest}>
            {children}
        </LayoutSpliterNavContentStyle>
    )    
}