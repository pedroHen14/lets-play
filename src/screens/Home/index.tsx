import React from "react";
import { View } from "react-native";
import { ButtonAdd, CategorySelect, Profile } from "../../components";
import { styles } from "./styles";

export function Home(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect />
      </View>
    </View>
  );
}