export const fetchWeather = (city) => async (dispatch) => {
  if (!city.trim()) return;
  dispatch({ type: "FETCH_WEATHER_REQUEST" });

  try {
    const apiKey = "4e4a4ddbd8e3ce2bddae06b174d557a0 ";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();

    if (data.cod === 200) {
      dispatch({
        type: "FETCH_WEATHER_SUCCESS",
        payload: { temp: data.main.temp, description: data.weather[0].description },
      });
    } else {
      dispatch({ type: "FETCH_WEATHER_FAILURE", payload: "City not found" });
    }
  } catch (error) {
    dispatch({ type: "FETCH_WEATHER_FAILURE", payload: "API Error" });
  }
};
