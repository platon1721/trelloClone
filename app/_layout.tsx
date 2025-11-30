import {Stack} from "expo-router"

const InitialLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    );
}

const RootLayoutNav = () => {
    return (
        <InitialLayout/>
    );
}

export default RootLayoutNav;