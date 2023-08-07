import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CrewMember({ route, navigation }) {
  return (
    <ScrollView style={globals.container}>
      <View>
        <Text style={globals.heading}>{route.params.name}</Text>
        <View style={globals.imageContainer}>
          <Image source={{ uri: route.params.image }} style={globals.image} />
        </View>
        <Text style={globals.text}>Currently at {route.params.agency}</Text>
        {route.params.status === "active" ? (
          <Text style={[globals.text, globals.active]}>
            Status: {route.params.status}
          </Text>
        ) : (
          <Text style={[globals.text, globals.inactive]}>
            Status: {route.params.status}
          </Text>
        )}

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
