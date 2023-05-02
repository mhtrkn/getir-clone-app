import React from 'react';
import {
    View,
    Text
} from 'react-native';

const MainLayout = ({ drawerAnimationStyle }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EEE',
                ...drawerAnimationStyle
            }}
        >
            <Text>Main Layout</Text>
        </View>
    )
}

export default MainLayout;