// src/firestoreService.js
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const collectionName = "resources";

export const fetchResources = async () => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const resources = [];
  querySnapshot.forEach((doc) => {
    resources.push({ ...doc.data(), id: doc.id });
  });
  return resources;
};

export const createResource = async (data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return { ...data, id: docRef.id };
};

export const updateResource = async (id, data) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
  return { ...data, id };
};

export const deleteResource = async (id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};
