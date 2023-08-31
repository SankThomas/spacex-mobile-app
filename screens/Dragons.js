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

export default function Dragons({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/dragons");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <Text style={globals.heading}>Dragons</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          data.map((dragon) => (
            <Pressable
              onPress={() => navigation.navigate("Dragon", dragon)}
              key={dragon.id}
            >
              <View style={globals.imageContainer}>
                <ImageBackground
                  resizeMode="cover"
                  source={{ uri: dragon.flickr_images[0] }}
                  style={globals.image}
                  borderRadius={16}
                />
                <Text style={[globals.text, styles.text]}>{dragon.name}</Text>
                <Text style={globals.text}>{`${dragon.description.substring(
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
