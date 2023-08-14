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

export default function Launchpads({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/launchpads");

  return (
    <ScrollView style={globals.container}>
      <Text style={globals.heading}>Launchpads</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          data.map((launchpad) => (
            <Pressable
              onPress={() => navigation.navigate("Launchpad", launchpad)}
              key={launchpad.id}
            >
              <View style={globals.imageContainer}>
                <Image
                  source={{ uri: launchpad.images.large[0] }}
                  style={globals.image}
                />
                <Text style={[globals.text, styles.text]}>
                  {launchpad.full_name}, {launchpad.name}
                </Text>
                <Text style={globals.text}>{`${launchpad.details.substring(
                  0,
                  100
                )}...`}</Text>
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
