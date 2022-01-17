import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './src/styles/index';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const List = () => {
  return (
    <div>
      <Text style={styles.middlePage}>List</Text>
    </div>
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
  middlePage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

export default List;
