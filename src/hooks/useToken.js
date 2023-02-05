import { useContext } from 'react';

import UserContext from '../context/UserContext';

export default function useToken() {
  const { userData: token } = useContext(UserContext);

  return token;
}
