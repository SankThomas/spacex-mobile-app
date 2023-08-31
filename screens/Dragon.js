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

export default function Dragon({ route, navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <View>
        <Text style={globals.heading}>{route.params.name}</Text>
        <View style={globals.imageContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {route.params.flickr_images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={[globals.image, styles.image]}
              />
            ))}
          </ScrollView>
        </View>

        <Text style={styles.heading}>
          First flight date: {route.params.first_flight}
        </Text>

        <View style={styles.capsule}>
          <Text style={styles.text}>Type: {route.params.type}</Text>
          <Text style={styles.text}>
            Crew capacity: {route.params.crew_capacity}
          </Text>
          <Text style={styles.text}>
            Dry Mass in kg: {route.params.dry_mass_kg} kg
          </Text>
          {route.params.active ? (
            <Text style={globals.active}>Active</Text>
          ) : (
            <Text style={globals.inactive}>Inactive</Text>
          )}
        </View>

        <View style={[styles.capsule, styles.heat_shield_details]}>
          <Text style={styles.heading}>HEAT SHIELD DETAILS</Text>
          <Text style={styles.text}>
            Material: {route.params.heat_shield.material}
          </Text>
          <Text style={styles.text}>
            Size: {route.params.heat_shield.size_meters} m
          </Text>
          <Text style={styles.text}>
            Temperature: {route.params.heat_shield.temp_degrees} degrees
          </Text>
          <Text style={styles.text}>
            Dev Partner: {route.params.heat_shield.dev_partner}
          </Text>
        </View>

        <Text style={globals.text}>{route.params.description}</Text>

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
    marginBottom: 16,
  },
  image: {
    marginRight: 16,
    width: 250,
    height: 230,
  },
  text: {
    marginBottom: 8,
  },
  heat_shield_details: {
    backgroundColor: "#f9bf8f",
    padding: 16,
    borderRadius: 16,
    marginVertical: 24,
  },
});
