import { useLocalSearchParams } from "expo-router";
import React, { useState } from 'react';

import {Text, View} from 'react-native';
import { useSupabase } from "../../../context/SupabaseContext";
import { Board } from "../../../types/enums";
const Board = () => {

    const {id} = useLocalSearchParams<{id : string}>();
    const getBoardInfo = useSupabase();
    const [board, setBoard] = useState<Board>();


    useEffect(() => {
        if(!id) {
            return;
        }
    }, []);

    const loadBoard = async () => {
        if (!id) {
            return;
        }
        const data = await getBoardInfo(id);
        setBoard(data);
        }
    }

    return (
        <View>
            <Text>
                Laud {id}
            </Text>
        </View>
    );
};

export default Board;

function useEffect(arg0: () => void, arg1: undefined[]) {
    throw new Error("Function not implemented.");
}
