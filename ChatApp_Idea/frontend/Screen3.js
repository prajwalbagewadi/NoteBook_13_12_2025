import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useFonts } from "expo-font";

export default function TempApp() {
  const [fontLoaded] = useFonts({
    Ndot: require("./assets/fonts/ndot-47-inspired-by-nothing.otf"),
  });
  if (!fontLoaded) {
    return (
      <View style={{ fontFamily: "Ndot", fontSize: 24, color: "#0f0f0f" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: "#0f0f0f",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: 79,
          marginBottom: 20,
          fontFamily: "Ndot",
          fontSize: 32,
          color: "#F7F7F7",
        }}
      >
        You.
      </Text>
      <TextInput
        //value={sessionId}
        editable={false}
        multiline={true} // allows multiple lines
        scrollEnabled={true} // enables scrolling
        style={{
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 70,
          backgroundColor: "#B60808",
          color: "#F7F7F7",
          width: 392,
          height: 120,
          fontFamily: "Ndot",
          fontSize: 24,
          textAlign: "center",
          textAlignVertical: "top",
          padding: 30,
        }}
        placeholderTextColor={"#F7F7F7"}
        placeholder="Session id."
      />
      <Text
        style={{
          marginTop: 79,
          marginBottom: 20,
          fontFamily: "Ndot",
          fontSize: 32,
          color: "#F7F7F7",
        }}
      >
        /-Matched with-/
      </Text>
      <TextInput
        //value={sessionId}
        editable={false}
        multiline={true} // allows multiple lines
        scrollEnabled={true} // enables scrolling
        style={{
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 70,
          backgroundColor: "#B60808",
          color: "#F7F7F7",
          width: 392,
          height: 120,
          fontFamily: "Ndot",
          fontSize: 24,
          textAlign: "center",
          textAlignVertical: "top",
          padding: 30,
        }}
        placeholderTextColor={"#F7F7F7"}
        placeholder="Session id."
      />
      <TouchableOpacity
        //onPress={findPerson} // send sessionId + topic
        style={{
          marginTop: 79,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 70,
          backgroundColor: "#B60808",
          width: 300,
          height: 95,
        }}
      >
        <Text style={{ fontFamily: "Ndot", fontSize: 32, color: "#f7f7f7" }}>
          Chat.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={backButton} // backButton
        style={{
          marginTop: 60,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 70,
          backgroundColor: "#B60808",
          width: 300,
          height: 95,
        }}
      >
        <Text style={{ fontFamily: "Ndot", fontSize: 32, color: "#f7f7f7" }}>
          Back.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
