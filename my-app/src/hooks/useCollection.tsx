import { firestore } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import useAuth from './useAuth';

const useCollection = () => {
  const user = useAuth();
  const [favorites, loading] = useCollectionData(collection(firestore, user?.uid || 'favorites')); //получение данных из firestore
  return [favorites, loading];
}

export default useCollection;
