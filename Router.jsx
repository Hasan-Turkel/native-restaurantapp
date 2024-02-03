import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "./pages/Dashboard";

import { MyBlogs } from "./pages/MyBlogs";
import NewBlog from "./pages/NewBlog";

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
              backgroundColor: "#86ecec",
            },
            headerStyle: {
              backgroundColor: "#86ecec",
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
            name="NewBlog"
            component={NewBlog}
            options={{
              tabBarLabel: "New Blog",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="new-message" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="MyBlogs"
            component={MyBlogs}
            options={{
              headerShown: false,
              tabBarLabel: "Me",
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
        </Tab.Navigator>
      )}
    </>
  );
};

export default Router;
