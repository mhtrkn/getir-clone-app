import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme, incrementCounter } from './src/redux/actions'

export default function Main() {
    const count = useSelector((state) => state.counter)
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementCounter());
    }
    const handleChangeTheme = () => {
        dispatch(changeTheme());
    }
    console.log('theme value: ', theme)
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme === 'dark' ? '#333' : '#eee' }]}>
            <View>
                <Text>{count}</Text>
                <TouchableOpacity style={{ backgroundColor: 'red', width: 250, height: 50 }} onPress={handleIncrement}>
                    <Text>
                        Artır
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 250, height: 60, backgroundColor: 'blue' }} onPress={handleChangeTheme}>
                    <Text>
                        Change Theme
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})