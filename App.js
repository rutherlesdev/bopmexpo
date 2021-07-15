import React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation';
import { useCachedResources } from 'react-native-rapi-ui';
import {
	useFonts,
	RobotoCondensed_700Bold_Italic,
	RobotoCondensed_400Regular,
	RobotoCondensed_400Regular_Italic,
	RobotoCondensed_700Bold
} from '@expo-google-fonts/roboto-condensed';
import { Provider } from 'react-redux';
import store from './src/store';
import { LogBox } from 'react-native';
// console.disableYellowBox = true;
// console.disableRedBox = true;
LogBox.ignoreAllLogs();


export default function App (props) {
	let [fontsLoaded] = useFonts({
		RobotoCondensed_700Bold_Italic,
		RobotoCondensed_400Regular,
		RobotoCondensed_400Regular_Italic,
		RobotoCondensed_700Bold
	});
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete &&  !props.skipLoadingScreen &&  !fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style='auto' translucent />
					<Provider store={store}>
						<AppNavigator />
					</Provider>
			</SafeAreaView>
		);
	}
}
