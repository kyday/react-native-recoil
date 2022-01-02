import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {authState, User} from '../../recoil/auth/auth';

export default function useAuthAction() {
  const set = useSetRecoilState(authState);

  return useMemo(
    () => ({
      authorize: (user: User) => {
        set({user});
      },
      logout: () => {
        set({user: null});
      },
    }),
    [set],
  );
}

const styles = StyleSheet.create({});
