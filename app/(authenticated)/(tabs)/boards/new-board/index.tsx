import React, { useState } from 'react';

import {Text, TextInput, View, StyleSheet, TouchableOpacity   } from 'react-native';
import { useSupabase } from "../../../../../context/SupabaseContext";
import {Link, Stack, useRouter } from "expo-router";
import { Colors } from "../../../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {

    const [boardName, setBoardName] = useState('');
    const { createBoard } = useSupabase();

    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState<string>('');

    const onCreateBoard = async () => {
        await createBoard(boardName, selectedColor);
        router.dismiss();
    }

    return (
        <View style={{marginVertical: 12}}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={onCreateBoard}>
                            <Text>Create</Text>
                        </TouchableOpacity>)
                }}>
            </Stack.Screen>
            <TextInput
                style={styles.input}
                onChangeText={setBoardName}
                placeholder="New Board"
                value={boardName}/>
            <Link href={"(authenticated/(tabs)/boards/new-board/color-select"}
                  asChild>
                <TouchableOpacity
                    style={styles.btnItem}>
                    <Text style={styles.btnItemText}>
                        Background
                    </Text>
                    <View style={[styles.colorPreview, {backgroundColor: selectedColor}]}/>
                    <Ionicons name="chevron-forward" size={22} color={Colors.grey}/>

                </TouchableOpacity>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    btnTextDisabled: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.grey,
    },
    btnText: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.primary,
    },
    input: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey,
        backgroundColor: "white",
        padding: 12,
        paddingHorizontal: 24,
        fontSize: 16,
        marginBottom: 32,
    },
    btnItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "white",
    },
    btnItemText: {
        fontSize: 16,
        flex: 1,
    },
    colorPreview: {
        width: 24,
        height: 24,
        borderRadius: 4,
    },
});

export default Index;