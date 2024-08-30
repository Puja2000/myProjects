import { ChangeEvent, useEffect, useState } from "react"
import { optionType } from "./types"
import Search from "./components/Search"
import useForeCast from "./hooks/useForecast"
import Forecast from "./components/Forecast"

const App = ():JSX.Element => {

  const {trem , options , forecast , setForecast , onInputChange , onOptionSelect , onSubmit} = useForeCast()

  useEffect(()=> { 

    navigator.geolocation.getCurrentPosition((position)=>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res)=>res.json())
      .then((data)=>{
        const forecastData = {...data.city,list:data.list.slice(0,16)}
        setForecast(forecastData)
    })
      
    })

  },[])
  
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 w-full">
      {/* {forecast ? (
        <Forecast data={forecast}/>
      ) : 
      (
      <Search trem={trem} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} />
      )} */}
      <Search trem={trem} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} forecast={forecast}/>
      
    
    </main>
  )
  
}

export default App
