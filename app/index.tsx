import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from "../constants/Colors"
import {useSafeAreaInsets} from "react-native-safe-area-context";

import * as WebBrowser from "expo-web-browser";

import EmailAuthModal from "../components/EmailAuthModal"
import {ModalType} from "../types/enums";
import {useMemo, useRef, useState} from "react";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";


const Index = () => {


    const {top} = useSafeAreaInsets();
    const modalRef = useRef<BottomSheetModal>(null)
    const [authType, setAuthType] = useState<ModalType | null>(null);
    const snapPoints = useMemo(() => ["70%"], []);

    const openLink = async () => {
        await WebBrowser.openBrowserAsync("https://google.com");
    }

    const showModal = (type: ModalType)=> {
        setAuthType(type);
        modalRef.current?.present();
    }

    const closeModal = () => {
        modalRef.current?.close();
    }

    return (

        <BottomSheetModalProvider>
        <View style={[styles.container , {paddingTop: top + 30}]}>
            <Image source={require("../assets/images/login/trello.png")} style={styles.logoImage}/>
            <Text style={[styles.introText, {paddingBottom: 10}]}>
                Welcome to Trello!
            </Text>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: "white"}]}
                    onPress={() => showModal(ModalType.Login)}>
                    <Text style={[styles.btnText, {color: Colors.primary}]}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: Colors.primary}]}
                    onPress={() => showModal(ModalType.SignUp)}
                >
                    <Text style={[styles.btnText, {color: "white"}]}>Register</Text>
                </TouchableOpacity>

                <Text style={[styles.descriptionText]}>
                    By signing up, you agree to the{" "}
                    <Text style={[styles.linkText]}
                          onPress={(openLink)}>
                        User Notice
                    </Text>{" "}
                    and {" "}
                    <Text style={[styles.linkText]}
                          onPress={(openLink)}>
                        Privacy Policy
                    </Text>
                    .
                </Text>
            </View>
        </View>
            <BottomSheetModal
                ref={modalRef}
                snapPoints={snapPoints}>
                <EmailAuthModal authType={authType} onBack={closeModal}/>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        // justifyContent: "center",
    },
    logoImage: {
        height: 500,
        paddingHorizontal: 40,
        resizeMode: "contain",

    },
    introText: {
        fontWeight: 600,
        color: "white",
        fontSize: 17,
        padding: 30
    },
    bottomContainer: {
        width: "100%",
        paddingHorizontal: 40,
        gap: 10,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        borderColor: "white",
        borderWidth: 1,
        height: 45
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 15
    },
    descriptionText: {
        fontSize: 12,
        textAlign: "center",
        color: "white",
        marginHorizontal: 60,
    },
    linkText: {
        color: "white",
        fontSize: 12,
        textAlign: "center",
        textDecorationLine: "underline"
    }
})
export default Index;