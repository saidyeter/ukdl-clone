import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage, } from 'zustand/middleware';

// Custom storage object
const storage: StateStorage = {
  getItem: (name: string) => {
    console.log(name, 'has been retrieved')
    return localStorage.getItem(name)
  },
  setItem: (name: string, value: string | null) => {
    if (!value) {
      return
    }
    console.log(name, 'with value', value, 'has been saved')
    localStorage.setItem(name, value)
  },
  removeItem: (name: string) => {
    console.log(name, 'has been deleted')
    localStorage.removeItem(name)
  },
}


type LicenceStore = {
  licenceNumber: string | null;
  setLicenceNumber: (licenceNumber: string | null) => void;
  theoryTestPassNumber: string | null;
  setTheoryTestPassNumber: (theoryTestPassNumber: string | null) => void;
  referenceNumber: string | null;
  setReferenceNumber: (referenceNumber: string | null) => void;
};

export const useLicenceStore = create<LicenceStore>()(
  persist(
    (set) => ({
      licenceNumber: null,
      setLicenceNumber: (licenceNumber) => set({ licenceNumber }),
      theoryTestPassNumber: null,
      setTheoryTestPassNumber: (theoryTestPassNumber) => set({ theoryTestPassNumber }),
      referenceNumber: null,
      setReferenceNumber: (referenceNumber) => set({ referenceNumber }),
    }),
    {
      name: 'my-app', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => storage), // pass in the storage object
    }
  )
);