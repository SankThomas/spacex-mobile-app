import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

// Screens
import Home from "./screens/Home";
import Crew from "./screens/Crew";
import CrewMember from "./screens/CrewMember";
import Dragon from "./screens/Dragon";
import Dragons from "./screens/Dragons";
import Landpad from "./screens/Landpad";
import Landpads from "./screens/Landpads";
import Launchpads from "./screens/Launchpads";
import Launchpad from "./screens/Launchpad";
import Roadster from "./screens/Roadster";
import Rockets from "./screens/Rockets";
import Rocket from "./screens/Rocket";
import Ships from "./screens/Ships";
import Ship from "./screens/Ship";

import AppIntro from "./screens/AppIntro";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showApp, setShowApp] = useState(false);

  const [fontsLoaded] = useFonts({
    productsansregular: require("./assets/fonts/product-sans-regular.ttf"),
    productsansbold: require("./assets/fonts/product-sans-bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      {showApp ? (
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="transparent" />
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "vertical",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: "#34222e",
              },
              headerTintColor: "#fee9d7",
              headerTitleStyle: {
                fontFamily: "productsansbold",
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Crew" component={Crew} />
            <Stack.Screen
              name="CrewMember"
              component={CrewMember}
              options={{
                headerTitle: "Crew Member",
              }}
            />
            <Stack.Screen name="Dragons" component={Dragons} />
            <Stack.Screen name="Dragon" component={Dragon} />
            <Stack.Screen name="Landpads" component={Landpads} />
            <Stack.Screen name="Landpad" component={Landpad} />
            <Stack.Screen name="Launchpads" component={Launchpads} />
            <Stack.Screen name="Launchpad" component={Launchpad} />
            <Stack.Screen name="Roadster" component={Roadster} />
            <Stack.Screen name="Rockets" component={Rockets} />
            <Stack.Screen name="Rocket" component={Rocket} />
            <Stack.Screen name="Ships" component={Ships} />
            <Stack.Screen name="Ship" component={Ship} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <AppIntro setShowApp={setShowApp} />
      )}
    </>
  );
}
