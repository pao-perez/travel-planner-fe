"use client";

import { ChangeEvent, useEffect } from "react";
import useCityStore from "../store/useCityStore";
import Spinner from "../components/Spinner";
import DashedCard from "../components/DashedCard";

export default function CitySelector() {
  const {
    cities,
    cityDetails,
    selectedCity,
    setSelectedCity,
    fetchCities,
    fetchCitiesStatus,
    fetchCityDetails,
  } = useCityStore();

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleCityChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    await fetchCityDetails(cityName);
  };

  if (fetchCitiesStatus.loading) return <Spinner />;
  if (fetchCitiesStatus.error)
    return (
      <p className="text-center text-red-500">{fetchCitiesStatus.error}</p>
    );

  return (
    <>
      <div>
        <select
          name="location"
          className="w-full p-2 border rounded-lg"
          onChange={handleCityChange}
          value={selectedCity ?? ""}
        >
          <option>Select a City</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.label}
            </option>
          ))}
        </select>
      </div>
      <DashedCard>{cityDetails?.description}</DashedCard>
    </>
  );
}
