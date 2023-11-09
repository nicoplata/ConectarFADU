import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNav from './src/navigation/MainNav';

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
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}