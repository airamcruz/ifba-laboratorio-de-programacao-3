import { LayoutSpliterRootStyle } from "./LayoutSpliterRoot.style"
import { LayoutSpliterRootProps } from "./LayoutSpliterRoot.type"

export function LayoutSpliterRoot({children, ...rest}: LayoutSpliterRootProps) {
    return (
        <LayoutSpliterRootStyle {...rest}>
            {children}
        </LayoutSpliterRootStyle>
    )
}