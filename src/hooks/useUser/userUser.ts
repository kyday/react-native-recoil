import React from 'react';

import {useRecoilValue} from 'recoil';
import {authState} from '../../recoil/auth/auth';

export default function useUser() {
  const auth = useRecoilValue(authState);
  return auth.user;
}
