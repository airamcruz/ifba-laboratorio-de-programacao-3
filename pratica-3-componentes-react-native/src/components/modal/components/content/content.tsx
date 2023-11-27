import { ScrollView, View } from "react-native"
import { ContentProps } from "./content.type"
import { getStyles } from "./content.style"

const Content = (props:ContentProps) => {

    const styles = getStyles({})

    return (
        <ScrollView>
            <View style={styles.container}>
                {props.children}
            </View>
        </ScrollView>
    )
}

export {
    Content,
}