import React from "react";
import useFetch from "../hooks/useFetch";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Ships({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/ships");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <Text style={globals.heading}>Ships</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          data.map((ship) => (
            <Pressable
              onPress={() => navigation.navigate("Ship", ship)}
              key={ship.id}
            >
              <View style={globals.imageContainer}>
                <Image source={{ uri: ship.image }} style={globals.image} />
                <Text style={[globals.text, styles.text]}>{ship.name}</Text>
              </View>
            </Pressable>
          ))
        )}
      </View>
      <SafeAreaView />
      <SafeAreaView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "productsansregular",
    fontSize: 28,
    marginBottom: 8,
  },
});
