"use client";

import CitySelector from "./views/CitySelector";
import WeatherDetail from "./views/WeatherDetail";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-gray-100 p-6">
      <article className="max-w-md min-w-[50vw] bg-white shadow-md rounded-md p-6">
        <section className="flex flex-col gap-4">
          <header>
            <h1 className="text-2xl font-bold">Trip Planner</h1>
          </header>
          <CitySelector />
          <WeatherDetail />
        </section>
      </article>
    </main>
  );
}
