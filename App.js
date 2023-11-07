import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    RobotoThin: require('./assets/Fonts/Roboto-Thin.ttf'),
    RobotoLight: require('./assets/Fonts/Roboto-Light.ttf'),
    RobotoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/Fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/Fonts/Roboto-Bold.ttf'),
    RobotoBlack: require('./assets/Fonts/Roboto-Black.ttf'),
  })

  if(!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}