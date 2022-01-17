/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import { Colors } from './src/styles/index';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const MapRoute = () => <Text>Map</Text>;

  const ListRoute = () => <Text>List</Text>;

  const trophyRoute = () => <Text>Trophies</Text>;

  const SettingsRoute = () => <Text>Settings</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'map', title: 'Map', icon: 'map' },
    { key: 'list', title: 'List', icon: 'format-list-bulleted' },
    { key: 'trophy', title: 'Trophies', icon: 'trophy' },
    { key: 'settings', title: 'Settings', icon: 'settings-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    list: ListRoute,
    trophy: trophyRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: Colors.PRIMARY }}
      activeColor={Colors.ASSCENT}
      safeAreaInsets={{ top: -40 }}
    />
  );

  // return (
  //   <SafeAreaView style={styles.primaryColor}>
  //     <StatusBar barStyle={'light-content'} />
  //     <NavigationContainer>
  //       {/* <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.primaryColor}>
  //         <View style={styles.whiteColor}>
  //           <Text style={styles.sectionTitle}>Hello World!</Text>
  //         </View>
  //       </ScrollView> */}
  //       <BottomNavigation
  //         navigationState={{ index, routes }}
  //         onIndexChange={setIndex}
  //         renderScene={renderScene}
  //       />
  //     </NavigationContainer>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  primaryColor: {
    backgroundColor: Colors.PRIMARY,
  },
  whiteColor: {
    backgroundColor: Colors.WHITE,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
