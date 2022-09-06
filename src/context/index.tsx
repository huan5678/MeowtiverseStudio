import {atom} from 'jotai';
import useFirebase from '../database/useFirebase';
import {ref, child, get} from 'firebase/database';

const atomStatus = () =>
{
  const { db } = useFirebase();
  const dbRef = ref(db);
  const collections = atom(get(child(dbRef, 'collections')).then((snapshot) => snapshot.val()));
  return collections;
};

export default atomStatus;
export const collections = atomStatus();
