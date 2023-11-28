import { Button, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { HeaderProps, HeaderStylesProps } from "./Header.type";
import { getStyles } from "./Header.style";
import { useModalContext } from "../../hook/UseModalContext";


const CloseButton = () => {

    const { onRequestClose } = useModalContext("Modal.Header");

    const styles = getStyles({})

    return (
        <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={onRequestClose}>
            <Text style={styles.buttonLabel}>x</Text>
        </TouchableOpacity>
    )
}

const Header = ({
    title,
    style,
    children,
    showCloseButton = false,
    align = "start",
}: HeaderProps) => {

    const styles = getStyles({ align, ...style })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {showCloseButton ? <CloseButton /> : null}
        </View>
    )
}

export {
    Header
}