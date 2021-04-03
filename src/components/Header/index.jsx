import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import constants from '../../constants';

const { colors } = constants;

const Header = ({ title, onIconPress, containerStyle = {} }) => {
  return (
    <View style={{ ...styles.topBar, ...containerStyle }}>
      <SimpleLineIcons
        name='arrow-left'
        size={14}
        color={colors.greyDark}
        onPress={onIconPress}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  textContainer: {},
  headerText: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default Header;
