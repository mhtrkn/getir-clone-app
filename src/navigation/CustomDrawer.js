import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import MainLayout from '../screens/MainLayout'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({ navigation }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled
            contentContainerStyle={{
                flex: 1
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 12,
                    alignItems: 'flex-start'
                }}
            >

                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingVertical: 12
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Ionicons name="ios-close" size={35} color="white" />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        flexDirection: 'row',
                        gap: 8
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: 'white'
                        }}
                        onPress={() => console.log("Clicked!")}
                    >
                        <FontAwesome name="user-o" size={25} color="#EEE" />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        color: 'white'
                    }}>
                        Mehmet Türkan
                    </Text>
                </View>


            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {

    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }

    return (
        <View style={styles.container}>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    sceneContainerStyle: {
                        backgroundColor: "transparent"
                    },
                    drawerContentStyle: {
                        flex: 1
                    },
                    drawerStyle: {
                        width: "65%",
                        backgroundColor: "transparent"
                    },
                    overlayColor: "transparent",
                    drawerType: "slide",
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {

                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)

                    return (
                        <CustomDrawerContent navigation={props.navigation} />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6C44'
    },
})