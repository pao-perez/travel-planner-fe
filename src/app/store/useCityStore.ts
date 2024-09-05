import { create, StoreApi } from "zustand";
import { City } from "../types/city";
import {
  fetchCities,
  fetchCityByName,
  fetchWeatherByCityName,
} from "../lib/apiClient";
import { Weather } from "../types/weather";

type CityWeatherDetail = City &
  Weather & {
    description: string;
  };

interface FetchStatus {
  loading: boolean;
  error: string | null;
}

interface CityState {
  cities: City[];
  selectedCity: string | null;
  fetchCitiesStatus: FetchStatus;
  fetchCityDetailsStatus: FetchStatus;
  cityDetails: CityWeatherDetail | null;

  setSelectedCity: (cityName: string) => void;
  fetchCities: () => Promise<void>;
  fetchCityDetails: (cityName: string) => Promise<void>;
}

// Helper function to update loading and error states
const setStatus = (
  set: StoreApi<CityState>["setState"],
  key: "fetchCitiesStatus" | "fetchCityDetailsStatus",
  loading: boolean,
  error: string | null = null
) => {
  set((state: CityState) => ({
    [key]: { ...state[key], loading, error },
  }));
};

const useCityStore = create<CityState>((set) => ({
  cities: [],
  selectedCity: null,
  fetchCitiesStatus: {
    loading: false,
    error: null,
  },
  fetchCityDetailsStatus: {
    loading: false,
    error: null,
  },
  cityDetails: null,

  // Actions
  setSelectedCity: (cityName: string) => set({ selectedCity: cityName }),

  fetchCities: async () => {
    setStatus(set, "fetchCitiesStatus", true);
    try {
      const data = await fetchCities();
      set({
        cities: data,
      });
      setStatus(set, "fetchCitiesStatus", false);
    } catch (error: unknown) {
      setStatus(set, "fetchCitiesStatus", false, (error as Error).message);
    }
  },

  fetchCityDetails: async (cityName: string) => {
    setStatus(set, "fetchCityDetailsStatus", true);
    try {
      const [details, weather] = await Promise.all([
        fetchCityByName(cityName),
        fetchWeatherByCityName(cityName),
      ]);
      set({
        cityDetails: { ...details, ...weather },
      });
      setStatus(set, "fetchCityDetailsStatus", false);
    } catch (error: unknown) {
      setStatus(set, "fetchCityDetailsStatus", false, (error as Error).message);
    }
  },
}));

export default useCityStore;
