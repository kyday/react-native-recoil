import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useUser from '../../../../hooks/useUser/userUser';

export default function AuthStatus() {
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요 :)'}
      </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  block: {flex: 1},
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
