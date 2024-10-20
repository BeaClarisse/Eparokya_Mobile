import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/User/Login";
import Register from "../Screens/User/Register";
import Register2 from "../Screens/User/Register2";
import UserProfile from "../Screens/User/Profile";
import UpdateProfile from "../Screens/User/Update";
import WeddingForm from "../Screens/User/Wedding/WeddingForm";

const Stack = createStackNavigator();

const UserNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WeddingForm"
        component={WeddingForm}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
