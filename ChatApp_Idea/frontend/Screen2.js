// import React from "react";
// import { Text, View, TouchableOpacity, TextInput } from "react-native";
// import { useState, useEffect } from "react";
// export default function Screen2({ navigation }) {
//   //const [sessionId, setSessionId] = useState("");
//   // useEffect(() => {
//   //   fetch("http://10.0.2.2:8080/createSessionId")
//   //     .then((res) => res.json())
//   //     .then((data) => setSessionId(data.sessionId))
//   //     .catch((err) => console.log(err));
//   // }, []);
//   return (
//     <View style={{}}>
//       <Text>Page2</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate("Screen1");
//         }}
//       >
//         <Text>goto screen1</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react"; //Use useState to store sessionId
//import { useEffect } from "react"; //UseEffect runs code when the screen loads.
import { ToastAndroid } from "react-native";

export default function Screen2({ route, navigation }) {
  const sessionId = route.params?.sessionId ?? "no session";
  const [topic, setTopic] = useState("");
  //const [sessionId, setSessionId] = useState(""); //It creates a state variable called sessionId and a function called setSessionId to update it.
  const [fontLoaded] = useFonts({
    Ndot: require("../assets/fonts/ndot-47-inspired-by-nothing.otf"),
  });
  const findPerson = async function () {
    console.log("findPerson pressed.");
    console.log("topic:", topic);
    try {
      const payload = {
        sessionId: String(sessionId),
        topic: String(topic),
      };
      //http://10.0.2.2:8080/findPerson
      //http://localhost:8080/findPerson
      const response = await fetch("http://192.168.110.128:8080/findPerson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log("response from api:", data);
      ToastAndroid.show(data.queueStatus, ToastAndroid.SHORT);
    } catch (err) {
      console.log("error from api:", err);
    }
  };
  const backButton = function () {
    console.log("Back pressed.");
    navigation.navigate("Screen1");
  };
  // useEffect(() => {
  //   fetch("http://10.0.2.2:8080/createSessionId")
  //     .then((res) => res.json())
  //     .then((data) => setSessionId(data.sessionId));
  // }, []); //The [] is called the dependency array.
  /*
  It tells React when to run the code inside useEffect.
  [] (empty):	Once, when component mounts (first render)
    eg:
      useEffect(() => {
        console.log("Runs only once when screen loads");
      }, []);
    Perfect for API calls on screen load.
  [x, y]:	Whenever x or y changes
    eg: 
      const [count, setCount] = useState(0);
      useEffect(() => {
        console.log("Count changed:", count);
      }, [count]);
    Only runs when count changes.
  No array:	After every render (danger: can cause infinite loops)
    eg:
      useEffect(() => {
        console.log("Runs after every render");
      });
    Not recommended for API calls — will keep running infinitely.
  */
  // if (!fontLoaded) {
  //   return null;
  // }
  if (!fontLoaded) {
    return (
      <view style={{ fontFamily: "Ndot", fontSize: 24, color: "#0f0f0f" }}>
        <Text>Loading...</Text>
      </view>
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
        Session Id.
      </Text>
      <TextInput
        value={sessionId}
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
          fontFamily: "Ndot",
          fontSize: 32,
          color: "#F7F7F7",
        }}
      >
        Add a Topic to start
      </Text>
      <Text
        style={{
          marginTop: 5,
          marginBottom: 20,
          fontFamily: "Ndot",
          fontSize: 32,
          color: "#F7F7F7",
        }}
      >
        chatting
      </Text>
      <View style={{ position: "relative" }}>
        {!topic && (
          <Text
            style={{
              position: "absolute",
              left: 35,
              top: 37,
              fontFamily: "Ndot",
              fontSize: 24,
              color: "#F7F7F7",
              zIndex: 1,
            }}
          >
            Topic to start talking.
          </Text>
        )}
        <TextInput
          value={topic} // bind value to state
          onChangeText={setTopic} // update state on typing
          style={{
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 70,
            backgroundColor: "#B60808",
            color: "#F7F7F7",
            width: 392,
            height: 84,
            fontFamily: "Ndot",
            fontSize: 24,
            textAlign: "left",
            textAlignVertical: "center",
            padding: 20,
          }}
          // placeholderTextColor={"#F7F7F7"}
          // placeholder="Topic to start talking."
        />
      </View>
      <TouchableOpacity
        onPress={findPerson} // send sessionId + topic
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
          Find Person.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={backButton} // backButton
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
