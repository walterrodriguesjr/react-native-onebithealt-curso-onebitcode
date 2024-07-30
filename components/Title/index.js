import React from 'react'
import {View, Text} from 'react-native'
import styles from "../Title/style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                ONEBITHEALT
            </Text>
        </View>
    );
}