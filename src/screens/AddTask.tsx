import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, TextInput } from 'react-native'
import Props from '../interfaces/props/AddTask'
import State from '../interfaces/states/AddTask'
import DateTimePicker from '@react-native-community/datetimepicker'
import If from '../components/If'
const initialState = {
    showDataPicker: false
}

class AddTask extends Component<Props> {
    state: State = {
        ...initialState
    }
    render(): React.ReactElement {
        return (
            <Modal transparent={true} visible={this.props.isVisible} animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.closeModal}>
                    <View style={styles.overlay}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input}
                        placeholder='Informe a Descrição' />
                    <View>
                        <TouchableOpacity onPress={() => this.setState({ showDataPicker: true })}>
                            <Text style={styles.date}>ter, 18 de outubro de 2022</Text>
                        </TouchableOpacity>
                        <If test={this.state.showDataPicker}>
                            <DateTimePicker mode='date' value={new Date()} />
                        </If>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.closeModal}>
                    <View style={styles.overlay}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.7)'
    },
    container: {
        backgroundColor: '#fff',

    },
    header: {
        backgroundColor: '#b13b44',
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#e3e3e3',
        borderWidth: 1,
        margin: 15,
        borderRadius: 6,
        height: 40,
        paddingLeft: 15
    },
    date: {
        marginLeft: 15,
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        color: '#b13b44',
        margin: 20
    }
})
export default AddTask