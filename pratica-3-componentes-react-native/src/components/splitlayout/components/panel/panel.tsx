import { ScrollView, View } from "react-native"
import { PanelProps } from "./panel.type"
import { getStyles } from "./panel.style"
import { useSplitLayoutContext } from "../../hook/useModalContext"

const Panel = ({
    children,
    style,
    size,
    sizePercent,
}:PanelProps) => {

    const {orientation} = useSplitLayoutContext("SplitLayout.Panel");

    const styles = getStyles({
        orientation: orientation, 
        size: size,
        sizePercent: sizePercent,
        ...style
    });

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export {
    Panel,
}