simple API call from React Native page to backend
```
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    Ndot: require("./assets/fonts/ndot-47-inspired-by-nothing.otf"),
  });
  if (!fontLoaded) {
    return null;
  }
  //👈 API Definition
  const startTalking = function () {
    console.log("button pressed.");
    // send http request to backend.
    // fetch() returns a Promise
    fetch("http://localhost:8080/createSession")
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
        backgroundColor: "#000000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={startTalking} // 👈 API CALL HERE
        style={{
          marginTop: 432.17,
          marginBottom: 432.17,
          marginLeft: 58.83,
          marginRight: 58.83,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 70,
          backgroundColor: "#ffffffff",
          width: 330,
          height: 120,
        }}
      >
        <View
          style={{
            marginTop: 12.83,
            marginBottom: 12.83,
            marginLeft: 15.17,
            marginRight: 15.17,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 70,
            backgroundColor: "#FF0000",
            width: 300,
            height: 95,
          }}
        >
          <Text
            style={{
              color: "#000000ff",
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
```
