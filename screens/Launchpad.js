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

export default function Launchpad({ route, navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <View>
        <Text style={globals.heading}>
          {route.params.full_name}, {route.params.name}
        </Text>

        <View style={globals.imageContainer}>
          <Image
            source={{ uri: route.params.images.large[0] }}
            style={globals.image}
          />
        </View>

        <View>
          <Text style={globals.text}>
            {route.params.launches.length} launches
          </Text>
          <Text style={globals.text}>
            {route.params.landing_successes} successful landings
          </Text>
          <Text style={globals.text}>
            {route.params.landing_attempts} landing attempts
          </Text>
          {route.params.status === "active" ? (
            <Text style={[globals.text, globals.active]}>
              Status: {route.params.status}
            </Text>
          ) : (
            <Text style={[globals.text, globals.inactive]}>
              Status: {route.params.status}
            </Text>
          )}
        </View>

        <View>
          <Text style={styles.heading}>Location</Text>
          <Text style={globals.text}>Locality: {route.params.locality}</Text>
          <Text style={globals.text}>Region: {route.params.region}</Text>
        </View>

        <View style={styles.details}>
          <Text style={globals.text}>{route.params.details}</Text>
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
  details: {
    marginTop: 16,
  },
});
