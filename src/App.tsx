
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToastProvider } from 'react-native-toast-notifications';
import Index from './pages/Index';
import { Svg, Path, Line, Circle } from 'react-native-svg';
import { Text } from 'react-native';

// Make SVG available globally for our custom icons
global.Svg = Svg;
global.Path = Path;
global.Line = Line;
global.Circle = Circle;
global.Text = Text;

const Stack = createNativeStackNavigator();

const App = () => (
  <ToastProvider>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Index"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  </ToastProvider>
);

export default App;
