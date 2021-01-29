import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button,Text} from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(()=>{
      navigation.setOptions({
          headerBackTitle:"Back to Login",
          headerTitleAlign: "center",
      })
  },[navigation])

  const register = () => {
    auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
      authUser.user.updateProfile({
        displayName:name,
        photoURL: imageUrl|| "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      })
    }).catch((error)=>alert(error.message));
  };
  return (
    <View behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email" 
          type="email"
          value={email}
          onChangeText={(text) => SetEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(text) => SetPassword(text)}
        />
        <Input
          placeholder="Profile picture Url(Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button containerStyle={styles.button} raised onPress={register} title="Register" />
      <View style={{height:40}}/>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: "center",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputContainer: {
      width:300,
  },
  button:{
      width:200,
      marginTop:10,
  },

});
