import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
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
          marginTop: 35,
          marginBottom: 5,
          fontFamily: "Ndot",
          fontSize: 32,
          color: "#F7F7F7",
        }}
      >
        Chat Room.
      </Text>
      <FlatList
        style={{
          marginTop: 10,
          borderRadius: 70,
          backgroundColor: "#f0f0f0",
          margin: 5,
          width: 400,
          height: 500,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        {/* Text Input */}
        <TextInput
          multiline={true}
          scrollEnabled={true}
          style={{
            flex: 1, // ✅ responsive instead of fixed width
            borderRadius: 30,
            backgroundColor: "#B60808",
            color: "#F7F7F7",
            height: 60,
            fontFamily: "Ndot",
            fontSize: 20,
            paddingHorizontal: 20,
            paddingTop: 12,
            textAlignVertical: "center",
          }}
          placeholderTextColor="#F7F7F7"
          placeholder="Type message."
        />

        {/* Send Button */}
        <TouchableOpacity
          onPress={() => console.log("Send pressed")}
          style={{
            marginLeft: 10,
            padding: 6,
          }}
        >
          <Image
            source={require("./assets/sendbutton.png")}
            style={{
              width: 40,
              height: 40,
              tintColor: "#F7F7F7", // works great for white icons
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        //onPress={backButton} // backButton
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 70,
          backgroundColor: "#B60808",
          width: 300,
          height: 50,
        }}
      >
        <Text style={{ fontFamily: "Ndot", fontSize: 32, color: "#f7f7f7" }}>
          Back.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
