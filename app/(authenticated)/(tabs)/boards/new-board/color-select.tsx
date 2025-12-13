import { router } from "expo-router";
import React, { useState } from 'react';

import {Text, TouchableOpacity, View} from 'react-native';


const COLORS = [
    '#2E7D32',  // forest green
    '#1976D2',  // blue
    '#C2185B',  // pink
    '#7B1FA2',  // purple
    '#D32F2F',  // red
    '#FF8F00',  // amber
    '#0097A7',  // cyan
    '#5D4037',  // brown
    '#616161',  // grey
];

export const DEFAULT_COLOR = COLORS[0];
const ColorSelect = () => {

    const [selected, setSelected] = useState<string>();

    const onColorSelect = (color: string) => {
        setSelected(color);
        router.setParams({bg: color});
        router.dismiss();
    }

    return (
        <View style={
            {flexDirection: "row",
                flexGrow: 1,
            flexWrap: "wrap",
            justifyContent: "center"
            }}>
            {COLORS.map((color, index) => (
                <TouchableOpacity
                key={color}
                style={{
                    backgroundColor: color,
                    height: 100,
                    width: 100,
                    margin: 5,
                    borderRadius: 5,
                    borderWidth: selected === color ? 2 : 0,
                    borderColor: "#000000",
                }}
                onPress={() => onColorSelect(color)}
                ></TouchableOpacity>
            ))}
        </View>
    );
};

export default ColorSelect;