import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch((err) => setError(err.message));
  }, [city, API_KEY]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  const { temp, humidity } = weather.main;
  const condition = weather.weather[0].description;
  const cityName = weather.name;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather in {cityName}</h2>
      <p><strong>Temperature:</strong> {temp} °C</p>
      <p><strong>Humidity:</strong> {humidity}%</p>
      <p><strong>Condition:</strong> {condition}</p>

      {/* Google Maps Embed */}
      <h3>Map</h3>
      <iframe
        title="map"
        width="100%"
        height="300"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(cityName)}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WeatherDetails;
