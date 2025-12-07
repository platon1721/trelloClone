import { Tabs } from "expo-router"
import {FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { Image } from "react-native"
import { Colors } from "../../../constants/Colors"

const Layout = () => {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTitleStyle: {
                    color: "white"
                }
            }}
        >
            <Tabs.Screen
                name="boards"
                options={{
                    headerShown: false,
                    title: 'Boards',
                    tabBarIcon: ({size, color}) => (
                        <Image style={{width: size, height: size}}
                               source={require("../../../assets/images/logo-icon-blue.png")}/>
                    )}}>
            </Tabs.Screen>
            <Tabs.Screen
                name="my-cards"
                options={{
                    headerShown: true,
                    title: 'My Cards',
                    tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons
                    name="cards"
                    size={size}
                    color={color}/>
                )}}>
            </Tabs.Screen>
            <Tabs.Screen
                name="search"
                options={{
                    headerShown: true,
                    title: 'Search',
                    tabBarIcon: ({size, color}) => (
                        <Ionicons
                        name="search"
                        size={size}
                        color={color}/>
                            )}}>
            </Tabs.Screen>
            <Tabs.Screen name="notifications"
                         options={{
                             headerShown: true,
                             title: 'Notifications',
                             tabBarIcon: ({size, color}) => (
                    <Ionicons
                        name="notifications"
                        size={size}
                        color={color}/>
                )}}>
            </Tabs.Screen>
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: true,
                    title: 'Account',
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome
                            name="user-circle"
                            size={size}
                            color={color}/>
                    )}}>
            </Tabs.Screen>
        </Tabs>
    )
}

export default Layout;