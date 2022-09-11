import create from 'zustand';
import { db } from '../database/useFirebase';
import {collection, DocumentData, onSnapshot} from 'firebase/firestore';

const useStore = create((set) => ({
  collectionsData: [],
  stepData: [],
  headerList: [],
  footerList: [],
  getCollection: () =>
  {
    onSnapshot(collection(db, 'collections'), (querySnapshot) =>
    {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) =>
      {
        data.push(doc.data());
      });
      set({ collectionsData: data });
    });
  },
  getStep: () =>
  {
    onSnapshot(collection(db, 'stepData'), (querySnapshot) => {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      set({stepData: data});
    });
  },
  getHeader: () =>
  {
    onSnapshot(collection(db, 'headerList'), (querySnapshot) =>
    {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) =>
      {
        data.push(doc.data());
      });
      set({ headerList: data });
    });
  },
  getFooter: () =>
  {
    onSnapshot(collection(db, 'footerList'), (querySnapshot) =>
    {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) =>
      {
        data.push(doc.data());
      });
      set({ footerList: data });
    });
  },
}));

export default useStore;
