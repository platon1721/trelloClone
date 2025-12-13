import { Stack, useRouter } from "expo-router"

const Layout = () => {

    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen name="index"
                          options={{title: "Board"}}/>
            <Stack.Screen name="color-select"
                          options={{title: "Background"}}/>
        </Stack>
    )
}

export default Layout;