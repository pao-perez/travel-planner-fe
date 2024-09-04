import { create } from "zustand";
import { City } from "../types/city";

interface CityState {
  cities: City[];
  selectedCity: City | null;
  loading: boolean;
  error: string | null;
  setSelectedCity: (city: City | null) => void;
}

const useCityStore = create<CityState>((set) => ({
  // TODO: Move to backend
  cities: [
    {
      name: "london",
      label: "London",
      description:
        "London is the capital and largest city of both England and the United Kingdom, with a population of 8,866,180 in 2022. The wider metropolitan area is the largest in Western Europe, with a population of 14.9 million.",
    },
    {
      name: "paris",
      label: "Paris",
      description:
        "Paris is the fourth-largest city in the European Union and the 30th most densely populated city in the world in 2022.",
    },
    {
      name: "rome",
      label: "Rome",
      description:
        'Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the "Eternal City". Rome is generally considered to be the cradle of Western civilization and Western Christian culture, and the centre of the Catholic Church.',
    },
  ],
  selectedCity: null,
  loading: false,
  error: null,

  // Actions
  setSelectedCity: (city: City | null) => set({ selectedCity: city }),
}));

export default useCityStore;
