import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

interface Props {
    style: object;
    icon: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const AuthInput: React.FC<Props> = (props: Props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: "#333",
        marginLeft: 20,
    },
    input: {
        marginLeft: 20,
        width: '70%',
    }
})
export default AuthInput