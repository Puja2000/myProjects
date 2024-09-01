import { ChangeEvent, useEffect, useState } from "react"
import { optionType } from "./types"
import Search from "./components/Search"
import useForeCast from "./hooks/useForecast"
import Forecast from "./components/Forecast"
import { useWeather } from "./components/Context/weatherContext"
import { getForecastData } from "./hooks/useGetData"

const App = (): JSX.Element => {

  const contextData = useWeather()
  const { onInputChange, onOptionSelect, onSubmit } = useForeCast()

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
        getForecastData(position.coords.latitude,position.coords.longitude)
        .then((data) => {
          const forecastData = { ...data.city, list: data.list.slice(0, 16) }
          contextData.setForecast(forecastData)
        })
    })
  }, [])

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 w-full h-full lg:h-full">
      <Search onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} />
    </main>
  )

}

export default App
