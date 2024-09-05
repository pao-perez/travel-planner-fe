import React from "react";
import useCityStore from "../store/useCityStore";
import Spinner from "../components/Spinner";
import DashedCard from "../components/DashedCard";
import TextDisplay from "../components/TextDisplay";

export default function WeatherDetail() {
  const { cityDetails, fetchCityDetailsStatus } = useCityStore();

  if (fetchCityDetailsStatus.loading) {
    return <Spinner />;
  }

  if (!cityDetails) {
    return (
      <DashedCard>
        <TextDisplay content="Select a city to view the weather details" />
      </DashedCard>
    );
  }

  const {
    location: { name, region, country, localtime },
    current: { temp_c, temp_f, condition },
  } = cityDetails;

  return (
    <DashedCard>
      <h2 className="text-2xl font-bold mb-4 text-center">
        {name}, {region}, {country}
      </h2>
      <div className="text-center">
        <p className="text-gray-600">Local time: {localtime}</p>
        <div className="flex justify-center items-center my-4">
          <img
            src={condition.icon}
            alt={condition.text}
            className="w-16 h-16"
          />
          <div className="ml-4">
            <p className="text-4xl font-bold">{temp_c}°C</p>
            <p className="text-sm text-gray-500">({temp_f}°F)</p>
            <p className="text-lg text-gray-700">{condition.text}</p>
          </div>
        </div>
      </div>
    </DashedCard>
  );
}
