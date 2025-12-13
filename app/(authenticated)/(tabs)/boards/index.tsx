import {Link, Stack, useFocusEffect } from "expo-router";
import React, {useCallback, useEffect, useState } from 'react';

import {Text, View, StyleSheet, FlatList, TouchableOpacity, RefreshControl, Button} from 'react-native';
import DropDownList from "../../../../components/DropDownList";
import { useSupabase } from "../../../../context/SupabaseContext";
import { Board } from "../../../../types/enums";

const Index = () => {

    const { getBoards } = useSupabase();
    const [boards, setBoards] = useState<Board[]>([]);
    const [refreshing, setRefreshing] = useState(false);


    useFocusEffect(useCallback(() => {
        loadBoards();
    }, []))

    const ListItem = ({item} : {item: Board}) => (
        <Link href={`/(authenticated)/board/${item.id}`}
            style={styles.listItem}
            key={item.id}
            asChild>
            <TouchableOpacity>
                <View style={[styles.colorBlock, {backgroundColor: item.background}]}>
                </View>
                 <Text style={[{fontSize: 16}, {color: "back "}]}>{item.title}</Text>
            </TouchableOpacity>
        </Link>
    )

    const loadBoards = async () => {
        const data = await getBoards();
        setBoards(data);
    }

    return (
        <View>
            <Stack.Screen
                options={{headerRight: () => <DropDownList/>}}
            />
            <FlatList data={boards}
                      style={styles.list}
                      keyExtractor={item => item.id}
                      ItemSeparatorComponent={() => <View style={{height: 2, backgroundColor: "lightgray"}}/>}
                      renderItem={ListItem}
                      refreshControl={
                          <RefreshControl refreshing={refreshing} onRefresh={loadBoards}/>
                      }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
    },
    list: {
        borderColor: "lightgray",
        borderWidth: 1,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        gap: 10,
    },
    colorBlock: {
        width: 30,
        height: 30,
        borderRadius: 5,
    }
});
export default Index;