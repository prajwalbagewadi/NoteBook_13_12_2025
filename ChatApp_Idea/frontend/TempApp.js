import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
export default function TempApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); //list of messages
  //  const [rmessages, rSetMessages] = useState([]); //list of messages
  const [fontLoaded] = useFonts({
    Ndot: require("./assets/fonts/ndot-47-inspired-by-nothing.otf"),
  });
  //receiveMessage API function
  const recieveMessage = async function (params) {
    console.log("recieve msg().");
    try {
      const payload = {
        sessionId: "123",
      };
      const response = await fetch(
        "http://192.168.30.128:8080/receiveMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      console.log("response from api:", data);
      if (data && data.message) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            senderId: data.senderId,
            message: data.message,
            timestamp: data.timeStamp,
          },
        ]);
      }
    } catch (err) {
      console.log("recieve msg api:", err);
    }
  };
  //Call receiveMessage using useEffect (Polling)
  useEffect(() => {
    const interval = setInterval(() => {
      recieveMessage();
    }, 2000); //poll every 2secs
    return () => clearInterval(interval);
  }, []);
  const sendMessage = async function () {
    console.log("send msg pressed.");
    try {
      const payload = {
        senderId: "123",
        receiverId: "456",
        message: message,
      };
      const response = await fetch("http://192.168.30.128:8080/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // Add the new message to the existing messages list using the previous state
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(), //unique id for list
          senderId: "123",
          message: message,
          timestamp: new Date().toISOString(), // ⏰ store time
        },
      ]);
      setMessage("");
      const data = await response.json();
      console.log("response from api:", data);
    } catch (err) {
      console.log("api error", err);
    }
  };
  const backButton = function () {
    console.log("Back pressed.");
    //navigation.navigate("Screen1");
  };
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
        data={messages}
        keyExtractor={(item) => item.id} //keyExtractor gives FlatList a unique key for each item to render and update efficiently //item = one message/element //item.id = unique key
        // renderItem={({ item }) => {
        //   return (
        //     <View
        //       style={{
        //         alignItems: "flex-end",
        //         marginVertical: 6,
        //       }}
        //     >
        //       <View
        //         style={{
        //           backgroundColor: "#860808",
        //           paddingVertical: 8,
        //           paddingHorizontal: 14,
        //           borderRadius: 18,
        //           maxWidth: "75%",
        //         }}
        //       ></View>
        //       <Text
        //         style={{ color: "#F7F7F7", fontSize: 16, fontFamily: "Ndot" }}
        //       >
        //         {item.message}
        //       </Text>
        //       <Text
        //         style={{
        //           fontSize: 10,
        //           fontFamily: "Ndot",
        //           color: "#eaeaea",
        //           alignSelf: "flex-end",
        //           marginTop: 4,
        //         }}
        //       >
        //         {item.timestamp}
        //       </Text>
        //     </View>
        //   );
        // }}
        renderItem={({ item }) => {
          const isMe = item.senderId === "123";
          return (
            <View
              style={{
                alignItems: isMe ? "flex-end" : "flex-start",
                marginVertical: 6,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: isMe ? "#1a1a1a" : "#B60808",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 18,
                  maxWidth: "75%",
                }}
              >
                <Text
                  style={{
                    color: "#F7F7F7",
                    fontSize: 16,
                    fontFamily: "Ndot",
                  }}
                >
                  {item.senderId}
                </Text>
                <Text
                  style={{
                    color: "#F7F7F7",
                    fontSize: 16,
                    fontFamily: "Ndot",
                  }}
                >
                  {item.message}
                </Text>

                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Ndot",
                    color: "#f7f7f7",
                    alignSelf: "flex-end",
                    marginTop: 4,
                  }}
                >
                  {new Date(item.timestamp).toLocaleTimeString()}
                </Text>
              </View>
            </View>
          );
        }}
        style={{
          marginTop: 10,
          borderRadius: 70,
          backgroundColor: "#1a1a1a",
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
          value={message}
          onChangeText={setMessage}
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
          onPress={sendMessage}
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
