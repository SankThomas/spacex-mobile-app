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

export default function Ship({ route, navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <View>
        <Text style={globals.heading}>{route.params.name}</Text>

        <View style={globals.imageContainer}>
          <Image style={globals.image} source={{ uri: route.params.image }} />
        </View>

        <View>
          <Text style={globals.text}>Type: {route.params.type}</Text>
          <Text style={globals.text}>
            {route.params.launches.length} launches
          </Text>
          {route.params.status ? (
            <Text style={[globals.text, globals.active]}>Status: Active</Text>
          ) : (
            <Text style={[globals.text, globals.inactive]}>
              Status: Inactive
            </Text>
          )}
        </View>

        <View style={styles.roles}>
          {route.params.roles.map((role, index) => (
            <Text style={styles.text} key={index}>
              {role}
            </Text>
          ))}
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
  roles: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
  },
  text: {
    backgroundColor: "#34222e",
    color: "#fff",
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 16,
  },
});
