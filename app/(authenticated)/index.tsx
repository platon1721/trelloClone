import React from 'react';

import {Button, Text, View} from 'react-native';
import {useAuth} from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {

    const {signOut} = useAuth();


    return (
        <SafeAreaView>
            <Text>
                Tere kasutaja!
            </Text>
            <Button title={"Sign out"} onPress={() => {
                signOut()
            }}></Button>
        </SafeAreaView>
    );
};

export default Index;