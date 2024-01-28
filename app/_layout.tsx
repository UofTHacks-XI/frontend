import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, Link, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// import NavBar from './navbar'
// import LoginPage from './(tabs)/index';

// import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require('../assets/fonts/Inter-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();

  return ( 
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    // <>
    //   <LoginPage/>
    // </>
    <Stack>

      <Stack.Screen name="(tabs)/index"  options={{
          title: 'My home',
          headerShown: false,
     
        }}/>


      <Stack.Screen name="(tabs)/homepage"  options={{
          title: 'HomePage',
          headerShown: false,
     
        }}/>

      <Stack.Screen name="(tabs)/memory_view"  options={{
          title: 'HomePage',
          headerShown: false,
     
        }}/>

      <Stack.Screen name="(tabs)/memory_pano"  options={{
          title: 'HomePage',
          headerShown: false,
     
        }}/>
      

    </Stack>
    // </ThemeProvider> 
  );
}

      {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} />  */}
