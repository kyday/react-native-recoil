import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useAuthAction from '../../../../hooks/useAuthAction/useAuthAction';

export default function AuthButton() {
  const {authorize, logout} = useAuthAction();

  const onPressLogin = () => {
    authorize({
      id: 1,
      userName: 'Joon',
      displayName: 'Joon',
    });
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin}>
        로그인
      </Button>
      <Button title="로그아웃" onPress={logout}>
        로그아웃
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
