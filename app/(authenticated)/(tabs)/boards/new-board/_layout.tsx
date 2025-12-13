import { Stack, useRouter } from "expo-router"
import { Colors } from "../../../../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {

    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen name="index"
                          options={{
                              title: "Board",
                              headerShadowVisible: false,
                              headerStyle: {
                                  backgroundColor: Colors.primary,
                              },
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => router.back()}>
                                      <Ionicons name="close" size={26} color="white"/>
                                  </TouchableOpacity>
                              )
                          }}/>
            <Stack.Screen name="color-select"
                          options={{
                              title: "Select Color",
                              headerShadowVisible: false,
                              headerStyle: {
                                  backgroundColor: Colors.primary,
                              },
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => router.back()}>
                                      <Ionicons name="close" size={26} color="white"/>
                                  </TouchableOpacity>
                              )
                          }}/>
        </Stack>
    )
}

export default Layout;