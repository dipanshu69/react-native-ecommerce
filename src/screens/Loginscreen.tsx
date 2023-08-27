import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 30,
      }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login To Your Account
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#D0D0D0",
            }}
          >
            <MaterialIcons
              style={{ paddingHorizontal: 5 }}
              name="email"
              size={30}
              color="black"
            />
            <TextInput
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: 18,
              }}
              placeholder="enter your email"
              value={email}
              onChangeText={(value: string) => setEmail(value)}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#D0D0D0",
            }}
          >
            <Ionicons
              style={{ paddingHorizontal: 5 }}
              name="md-lock-closed"
              size={30}
              color="black"
            />
            <TextInput
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: 18,
              }}
              placeholder="enter your password"
              value={password}
              onChangeText={(value: string) => setPassWord(value)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500", fontSize: 16 }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable
          style={{
            width: 180,
            backgroundColor: "#FEBE10",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              letterSpacing: 1,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => (navigation as any).navigate("Register")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "grey",
              alignItems: "stretch",
            }}
          >
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
