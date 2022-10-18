import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import todayImage from '../../assets/imgs/today.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from './AddTask'
import State from '../interfaces/states/TaskList'

const initialState = {
    showAddTask: false
}


class TaskList extends Component<State> {
    state: State = {
        ...initialState
    }

    render(): React.ReactElement {

        return (
            <>
                <View style={styles.container}>
                    <AddTask isVisible={this.state.showAddTask}
                        closeModal={() => this.setState({ showAddTask: false })} />
                    <ImageBackground source={todayImage}
                        style={styles.background}>
                        <View style={styles.iconBar}>
                            <TouchableOpacity >
                                <Icon name="bars" size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="eye" size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subTitle}>ter, 18 de outubro</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.taskList}>
                        <Text>Lista de tarefas</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton}
                        onPress={() => this.setState({ showAddTask: true })}>
                        <Icon name="plus" size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
        color: '#fff',

    },
    subTitle: {
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
        color: '#fff',
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        backgroundColor: '#b13b44',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
})

export default TaskList