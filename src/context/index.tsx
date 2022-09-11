import create from 'zustand';
import { db } from '../database/useFirebase';
import { collection, DocumentData, onSnapshot } from 'firebase/firestore';
import { collectionData, navData } from '..';

interface State {
  collectionsData: collectionData['data'];
  stepData: navData[ 'data' ];
  getCollection: () => void;
  getStep: () => void;
}

const useStore = create((set) => ({
  collectionsData: [],
  stepData: [],
  getCollection: () => {
    onSnapshot(collection(db, 'collections'), (querySnapshot) => {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      set({collectionsData: data});
    });
  },
  getStep: () => {
    onSnapshot(collection(db, 'stepData'), (querySnapshot) => {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      set({stepData: data});
    });
  },
}));

export default useStore;
