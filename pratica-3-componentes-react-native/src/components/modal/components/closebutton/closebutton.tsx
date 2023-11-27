import { Text, TouchableOpacity } from "react-native";
import { useModalContext } from "../../hook/useModalContext";
import { CloseButtonProps } from "./closebutton.type";
import { getStyles } from "./closebutton.style";

const CloseButton = ({
    label,
    style,
    fill = false,
}: CloseButtonProps) => {

    const { onRequestClose } = useModalContext("Modal.CloseButton");

    const styles = getStyles({ fill, ...style })

    return (
        <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={onRequestClose}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export {
    CloseButton
}