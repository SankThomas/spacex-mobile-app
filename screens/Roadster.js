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

export default function Roadster({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/roadster");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <Text style={globals.heading}>Elon Musk's Tesla Roadster</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          <View>
            <View style={globals.imageContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
              >
                {data.flickr_images.map((image, index) => (
                  <Image
                    key={index}
                    source={{ uri: image }}
                    style={[globals.image, styles.image]}
                  />
                ))}
              </ScrollView>
            </View>

            <View>
              <Text style={globals.text}>{data.details}</Text>
            </View>

            <View style={styles.description}>
              <Text style={styles.heading}>About</Text>
              <Text style={globals.text}>
                Launch date: {data.launch_date_utc}
              </Text>
              <Text style={globals.text}>
                Launch mass: {data.launch_mass_kg}kgs
              </Text>
              <Text style={globals.text}>
                Days since launch: {data.period_days}
              </Text>
              <Text style={globals.text}>
                Current speed: {data.speed_kph.toLocaleString()}kph
              </Text>
              <Text style={globals.text}>
                Distance from the earth:{" "}
                {data.earth_distance_km.toLocaleString()}km
              </Text>
            </View>
          </View>
        )}
      </View>
      <Pressable
        style={globals.customButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={globals.customButtonText}>Go Back</Text>
      </Pressable>
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
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    marginRight: 16,
    width: 250,
    height: 230,
  },
  description: {
    marginVertical: 16,
  },
});
