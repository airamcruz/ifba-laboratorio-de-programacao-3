import { LayoutSpliterNavFooterStyle } from "./LayoutSpliterNavFooter.style";
import { LayoutSpliterNavFooterProps } from "./LayoutSpliterNavFooter.type";

export function LayoutSpliterNavFooter({ children, ...rest } : LayoutSpliterNavFooterProps) {
    return (
        <LayoutSpliterNavFooterStyle {...rest}>
            {children}
        </LayoutSpliterNavFooterStyle>
    )    
}