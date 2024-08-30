import { ChangeEvent } from "react"
import { forecastType, optionType } from "../types"
import Forecast from "./Forecast"

type Props = {
  trem: string,
  options: [],
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onOptionSelect: (option: optionType) => void,
  onSubmit: () => void,
  forecast: forecastType | null
}

const Search = ({
  trem,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
  forecast
}: Props
): JSX.Element => {

  return (
    <section className="m-auto w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
      {/* <p className="mt-2 text-sm">Enter below a place you want to know the weather of and select an option from dropdown</p> */}
      <div className="relative flex mt-10 md:mt-4">
        <input type="text" value={trem} className="px-2 py-1 rounded-l-md border-white" onChange={onInputChange} />
        <ul className="absolute top-9 ml-1 bg-white rounded-b-md">
          {options.map((option: optionType, index: number) => (
            <li key={option + '-' + index}>
              <button
                className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                onClick={() => onOptionSelect(option)}
              >
                {option.name}, {option.country}
              </button>
            </li>
          ))}
        </ul>
        <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer" onClick={onSubmit}>search</button>
      </div>
      <div className="m-2">
        {forecast ? (
          <Forecast data={forecast} />
        ) :
          (
            <div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-[100vh] lg:h-[100vh] rounded drop-shadow-lg text-zinc-700"></div>
          )}
      </div>

    </section>
  )
}

export default Search