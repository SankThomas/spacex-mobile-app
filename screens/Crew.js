import React from "react";
import useFetch from "../hooks/useFetch";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Crew({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/crew");

  return (
    <ScrollView style={globals.container}>
      <Text style={globals.heading}>Meet the Crew</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          data.map((crew) => (
            <Pressable
              onPress={() => navigation.navigate("CrewMember", crew)}
              key={crew.id}
            >
              <View style={globals.imageContainer}>
                <ImageBackground
                  resizeMode="cover"
                  source={{ uri: crew.image }}
                  style={globals.image}
                  borderRadius={16}
                />
                <Text style={[globals.text, styles.text]}>{crew.name}</Text>
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
    fontSize: 28,
    fontFamily: "productsansregular",
  },
});
