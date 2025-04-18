import {View, Platform, StatusBar} from 'react-native';
import {DefaultTheme, createStaticNavigation, useLinkBuilder, useTheme, DarkTheme} from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Study from "./Tabs/Study";
import Manage from "./Tabs/Manage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { useFonts } from '@expo-google-fonts/orbitron/useFonts';
import {Orbitron_400Regular} from "@expo-google-fonts/orbitron";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




const myTheme = {...DefaultTheme, colors : {
  ...DefaultTheme.colors,
    background: '#2f2f2f',
    primary: 'rgb(137, 137, 93)'
  }}

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
              options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                      ? options.title
                      : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
              <PlatformPressable
                  href={buildHref(route.name, route.params)}
                  key={route.name}
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarButtonTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{backgroundColor: 'black', flex: 1, alignItems:"center", justifyContent: "center" }}
              >
                <Text style={{ marginTop: 25, marginBottom: 30,  color: isFocused ? colors.primary : colors.text }}>
                  {label}
                </Text>
              </PlatformPressable>
          );
        })}
      </View>
  );
}
const headerFont = {

    fontSize:20,
    fontFamily: "Orbitron_400Regular"

}

const MyTabs = createBottomTabNavigator({
  tabBar: (props) => <MyTabBar {...props} />,
  screenOptions: ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      if (route.name === 'Study') {
        iconName = focused ? 'cards' : 'cards-outline';
      } else if (route.name === 'Manage') {
        iconName = focused ? 'content-save-all' : 'content-save-all-outline';
      }

      return <MaterialCommunityIcons name={iconName} size={size} color={color} focused={focused} />
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'grey',
  }),
  screens: {
    Study: {
      screen: Study,
      options: {
        title: 'Study',
        headerTitleStyle: headerFont,
      },
    },
    Manage: {
      screen: Manage,
      options: {
        title: 'Manage Deck',
      }
    }
  },
});


const Navigation = createStaticNavigation(MyTabs);
const queryClient = new QueryClient();
export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
  });
  return <QueryClientProvider client={queryClient}><StatusBar barStyle="light-content" /><Navigation theme={DarkTheme}/></QueryClientProvider>;
}