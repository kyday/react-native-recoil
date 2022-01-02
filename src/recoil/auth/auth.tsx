import {atom} from 'recoil';

export type User = {
  id: number;
  userName: string;
  displayName: string;
};

type AuthState = {
  user: User | null;
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
  },
});
