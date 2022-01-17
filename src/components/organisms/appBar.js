import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/index';

const appBar = ({ title }) => (
  <Appbar style={styles.bottom}>
    <Appbar.Content title={title} color={Colors.Primary} />
  </Appbar>
);

export default appBar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
