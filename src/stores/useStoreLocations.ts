// src/stores/useStoreLocations.ts
import { create } from 'zustand';

export type StoreLocation = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

type StoreState = {
  stores: StoreLocation[];
  addStore: (store: StoreLocation) => void;
  removeStore: (id: string) => void;
  clearStores: () => void;
};

const useStoreLocations = create<StoreState>((set) => ({
  stores: [],
  addStore: (store) => set((state) => ({ stores: [...state.stores, store] })),
  removeStore: (id) =>
    set((state) => ({ stores: state.stores.filter((s) => s.id !== id) })),
  clearStores: () => set({ stores: [] }),
}));

export default useStoreLocations;
