import React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {counterState} from '../../recoil/counter/counterRecoil';

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <View>
      <View>
        <Text>You clicked times1 {count}</Text>
      </View>
      <Button onPress={() => setCount(prev => prev + 1)} title="click" />
    </View>
  );
}

export default Counter;
