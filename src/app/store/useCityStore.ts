import { create } from "zustand";
import { City } from "../types/city";
import { fetchCities, fetchCityByName } from "../lib/apiClient";

interface CityState {
  cities: City[];
  selectedCity: City | null;
  loading: boolean;
  error: string | null;
  setSelectedCity: (city: City) => void;
  fetchCities: () => Promise<void>;
  fetchCityByName: (name: string) => Promise<void>;
}

const useCityStore = create<CityState>((set) => ({
  cities: [],
  selectedCity: null,
  loading: false,
  error: null,

  // Actions
  setSelectedCity: (city: City) => set({ selectedCity: city }),

  fetchCities: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchCities();
      set({ cities: data, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      }
    }
  },

  fetchCityByName: async (name: string) => {
    set({ loading: true, error: undefined });
    try {
      const data = await fetchCityByName(name);
      set({ selectedCity: data, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      }
    }
  },
}));

export default useCityStore;
