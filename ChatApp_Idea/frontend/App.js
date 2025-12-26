import { enableScreens } from "react-native-screens"; // Enables native screens for React Navigation to prevent Android crashes and improve performance
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Import your screens
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
//Create the Stack
const Stack = createNativeStackNavigator();
/**
 * This creates an object that gives you:
 * <Stack.Navigator> → controls navigation
 * <Stack.Screen> → defines individual screens
 */
export default function App() {
  return (
    //NavigationContainer
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*
  This wraps everything
  Keeps track of current screen
  Enables navigation.navigate()
  Handles back button, gestures, history
  Without this → navigation will NOT work
  */
  /*
 Stack.Navigator:
  This defines:
    The type of navigation (stack)
    Global options for all screens
  headerShown: false
    Hides default top header
    You’re using your own UI
Register screens:
    <stack.Screen name="Screen1" component={Screen1} />
    Screen name = "Screen1"
    Component to render = Screen1
 */
}

// import { Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>App Loaded</Text>
//     </View>
//   );
// }

// import { enableScreens } from "react-native-screens";
// enableScreens();

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Text, View } from "react-native";

// const Stack = createNativeStackNavigator();

// function Test() {
//   return (
//     <View>
//       <Text>Test Screen</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Test" component={Test} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
