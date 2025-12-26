// import React from "react";
// import { Text, View, TouchableOpacity, TextInput } from "react-native";
// import { useState, useEffect } from "react";
// export default function Screen1({ navigation }) {
//   //const [sessionId, setSessionId] = useState("");
//   // useEffect(() => {
//   //   fetch("http://10.0.2.2:8080/createSessionId")
//   //     .then((res) => res.json())
//   //     .then((data) => setSessionId(data.sessionId))
//   //     .catch((err) => console.log(err));
//   // }, []);
//   return (
//     <View style={{}}>
//       <Text>Page1</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate("Screen2");
//         }}
//       >
//         <Text>goto screen2</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

export default function Screen1({ navigation }) {
  const [fontLoaded] = useFonts({
    Ndot: require("../assets/fonts/ndot-47-inspired-by-nothing.otf"),
  });
  if (!fontLoaded) {
    //return null;
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  //👈 API Definition
  const startTalking = function () {
    console.log("startTalking pressed.");

    // send http request to backend.
    // fetch() returns a Promise
    //http://10.0.2.2:8080/createSessionId
    //http://localhost:8080/createSessionId
    fetch("http://192.168.110.128:8080/createSessionId") //📌 10.0.2.2 = special alias for host machine (your PC)
      // This .then() runs when the server sends a response
      .then(
        // Convert the response body from JSON text → JavaScript object
        // response.json() ALSO returns a Promise
        (response) => response.json()
      )
      // This .then() runs after JSON parsing is complete
      .then(
        // 'data' now contains the actual response from the backend
        // Example: { sessionId: "abc123", status: "created" }
        (data) => {
          console.log(data);
          navigation.navigate("Screen2", { sessionId: data.sessionId });
        }
      )
      // This runs if:
      // - network fails
      // - server is unreachable
      // - JSON parsing fails
      .catch((err) => {
        // Print the error object
        console.log(err);
      });
  };
  return (
    <View
      style={{
        backgroundColor: "#0f0f0f",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Ndot",
          marginBottom: 20,
          fontSize: 32,
          color: "#F7F7F7",
        }}
      >
        Press to chat.
      </Text>
      <TouchableOpacity
        onPress={startTalking} // 👈 API CALL HERE
        style={{
          /*
          marginTop: 432.17,
          marginBottom: 432.17,
          marginLeft: 58.83,
          marginRight: 58.83,*/
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 70,
          backgroundColor: "#F7F7F7",
          width: 330,
          height: 120,
        }}
      >
        <View
          style={{
            /*marginTop: 12.83,
            marginBottom: 12.83,
            marginLeft: 15.17,
            marginRight: 15.17,*/
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 70,
            backgroundColor: "#B60808",
            width: 300,
            height: 95,
          }}
        >
          <Text
            style={{
              color: "#F7F7F7",
              fontFamily: "Ndot",
              fontSize: 32,
            }}
          >
            Start Talking
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Response:
 * LOG  button pressed.
 * LOG  {"sessionId": "104a0ad0-3ec5-4f99-b615-584719068416"}
 */
