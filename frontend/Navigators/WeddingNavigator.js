import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeddingForm from "../Screens/User/Wedding/WeddingForm";
import ConfirmedWedding from "../Screens/Admin/Wedding/ConfirmedWedding";

const Stack = createStackNavigator();

const WeddingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WeddingForm"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WeddingForm"
        component={WeddingForm}
        options={{ title: "Wedding Form" }}
      />

      <Stack.Screen
        name="ConfirmedWedding"
        component={ConfirmedWedding}
        options={{ title: "Confirmed Wedding" }}
      />
    </Stack.Navigator>
  );
};

export default WeddingNavigator;
