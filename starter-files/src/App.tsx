import { ChangeEvent, useEffect, useState } from "react"
import { optionType } from "./types"
import Search from "./components/Search"
import useForeCast from "./hooks/useForecast"
import Forecast from "./components/Forecast"

const App = ():JSX.Element => {

  const {trem , options , forecast , onInputChange , onOptionSelect , onSubmit} = useForeCast()
  
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 w-full">
      {forecast ? (
        <Forecast data={forecast}/>
      ) : 
      (
      <Search trem={trem} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} />
      )}
    </main>
  )
  
}

export default App
