import React from "react";
import { StyleSheet, View } from "react-native";
import Title from '../../components/Title/index';
import Form from "@/components/Form";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
