import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "./pages/Dashboard";

import MyReservations from "./pages/MyReservations";
import CreateReservation from "./pages/CreateReservation";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import useAuthCalls from "./hooks/useAuthCalls";
import Restaurants from "./pages/Restaurants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#86ecec",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const Router = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user ? (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 50,
              backgroundColor: "black",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Restaurants"
            component={Restaurants}
            options={{
              headerShown: false,
              tabBarLabel: "Our Restaurants",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="restaurant" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="CreateReservation"
            component={CreateReservation}
            options={{
              headerShown: false,
              tabBarLabel: "Create Reservation",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="new-message" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="MyReservations"
            component={MyReservations}
            options={{
              headerShown: false,
              tabBarLabel: "My Reservations",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 50,
              backgroundColor: "black",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Restaurants"
            component={Restaurants}
            options={{
              headerShown: false,
              tabBarLabel: "Our Restaurants",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="restaurant" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default Router;
