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
  // const MapRoute = () => <Text>Map</Text>;
  // const ListRoute = () => <Text>List</Text>;
  // const FindsRoute = () => <Text>Finds</Text>;
  // const SettingRoute = () => <Text>Setting</Text>;

  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'map', title: 'Map', icon: 'map' },
  //   { key: 'list', title: 'List', icon: 'list' },
  //   { key: 'finds', title: 'Finds', icon: 'star' },
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   music: MapRoute,
  //   albums: ListRoute,
  //   recents: FindsRoute,
  //   setting: SettingRoute,
  // });

  return (
    <SafeAreaView style={styles.primaryColor}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.primaryColor}>
          <View style={styles.whiteColor}>
            <Text style={styles.sectionTitle}>Hello World!</Text>
          </View>
        </ScrollView>
      </NavigationContainer>
    </SafeAreaView>
  );
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
