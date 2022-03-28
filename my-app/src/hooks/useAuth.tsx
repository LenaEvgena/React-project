import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserImplType } from '../types/types';

const useAuth = () => {
  const [user] = useAuthState(auth) as UserImplType[];
  return user;
}

export default useAuth;
