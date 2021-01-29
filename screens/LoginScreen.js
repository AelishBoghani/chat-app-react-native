import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        navigation.replace("Home")
      }
    })

    return unsubscribe;
  },[])

  const signIn = () => {
    auth.signInWithEmailAndPassword(email,password).catch((error)=>alert(error))
  };
  return (
    <View behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => SetPassword(text)}
         
        />
      </View>
      <Button 
      containerStyle={styles.button} 
      title="Login" 
      onPress={signIn} />

      <Button 
      onPress={() => {navigation.navigate("Register")}}
      containerStyle={styles.button} title="Register" 
      type="outline"  />
      <View style={{height:40}}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
      width:300,
      borderWidth: 0,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
