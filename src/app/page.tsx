"use client";

import { ChangeEvent, useEffect } from "react";
import useCityStore from "./store/useCityStore";
import InfoSection from "./components/InfoSection";
import "./globals.css";
import Spinner from "./components/Spinner";

export default function Home() {
  const {
    cities,
    loading,
    error,
    selectedCity,
    setSelectedCity,
    fetchCities,
  } = useCityStore();

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    const cityObject = cities.find((city) => city.name === cityName);
    setSelectedCity(cityObject!);
  };

  if (loading)
    return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main className="flex justify-center min-h-screen bg-gray-100 p-6">
      <article className="max-w-md min-w-[50vw] bg-white shadow-md rounded-md p-6">
        <section className="flex flex-col gap-4">
          <header>
            <h1 className="text-2xl font-bold">Trip Planner</h1>
          </header>
          <div>
            <select
              name="location"
              className="w-full p-2 border rounded-lg"
              onChange={handleCityChange}
            >
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          <InfoSection content={selectedCity?.description} />
          <InfoSection content={`Current weather in London`} />
        </section>
      </article>
    </main>
  );
}
