import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import backgroundImage from '../../assets/imgs/login.jpg';
import AuthInput from '../components/AuthInput';

class Auth extends Component {
    signin = () => {
        console.warn('login')
    }
    render(): React.ReactElement {

        return (
            <>
                <ImageBackground source={backgroundImage}
                    style={styles.background}>
                    <Text style={styles.title}>Tasks</Text>
                    <View>
                        <Text style={styles.subtitle}>Faça seu login</Text>
                        <AuthInput icon='user' placeholder="Nome" />
                        <TouchableOpacity onPress={this.signin}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Entrar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ padding: 10 }}>
                        <Text style={styles.buttonText}>Ainda não possui conta?</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    title: {
        fontSize: 70,
        textAlign: 'center',
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        color: '#fff'
    },
    button: {
        backgroundColor: '#080',
        padding: 10,
        alignItems: 'center',
        borderRadius: 7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default Auth