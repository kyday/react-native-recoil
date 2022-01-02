import React from 'react';
import {SafeAreaView} from 'react-native';

import AuthButton from './components/AuthButtons/AuthButton';
import AuthStatus, {styles} from './components/AuthStatus/AuthStatus';

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButton />
    </SafeAreaView>
  );
}

export default AuthApp;
