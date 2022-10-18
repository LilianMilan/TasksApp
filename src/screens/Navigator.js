import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import Auth from './Auth';
import TaskList from './TaskList';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouterName={Auth} screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={Auth} />
            <Stack.Screen name='Home' component={TaskList} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Navigator