import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rocket({ route, navigation }) {
  return (
    <ScrollView style={globals.container}>
      <View>
        <Text style={globals.heading}>{route.params.name}</Text>

        <ScrollView horizontal>
          {route.params.flickr_images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={[globals.image, styles.image]}
            />
          ))}
        </ScrollView>

        <View>
          <Text style={globals.text}>Type: {route.params.type}</Text>
          <Text style={globals.text}>Company: {route.params.company}</Text>
          <Text style={globals.text}>
            Success Rate: {route.params.success_rate_pct}%
          </Text>
          {route.params.status ? (
            <Text style={[globals.text, globals.active]}>Status: Active</Text>
          ) : (
            <Text style={[globals.text, globals.inactive]}>
              Status: Inactive
            </Text>
          )}
        </View>

        <View>
          <Text style={styles.heading}>About</Text>
          <Text style={globals.text}>Country: {route.params.country}</Text>
          <Text style={globals.text}>Stages: {route.params.stages}</Text>
          <Text style={globals.text}>
            Height: {route.params.height.meters}m
          </Text>
          <Text style={globals.text}>
            Diameter: {route.params.diameter.meters}m
          </Text>
          <Text style={globals.text}>
            Mass: {route.params.mass.kg.toLocaleString()}kgs
          </Text>
        </View>

        <View style={styles.description}>
          <Text style={globals.text}>{route.params.description}</Text>
        </View>

        <Pressable
          style={globals.customButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={globals.customButtonText}>Go Back</Text>
        </Pressable>
      </View>
      <SafeAreaView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    marginTop: 16,
  },
  image: {
    marginRight: 16,
    width: 250,
    height: 230,
  },
});
