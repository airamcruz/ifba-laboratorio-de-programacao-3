import { LayoutSpliterContentStyle } from "./LayoutSpliterContent.style";
import { LayoutSpliterContentProps } from "./LayoutSpliterContent.type";

export function LayoutSpliterContent({ children, ...rest } : LayoutSpliterContentProps) {
    return (
        <LayoutSpliterContentStyle {...rest}>
            {children}
        </LayoutSpliterContentStyle>
    )    
}