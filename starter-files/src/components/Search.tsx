import { ChangeEvent, useContext } from "react"
import { optionType } from "../types"
import Forecast from "./Forecast"
import { useWeather } from "./Context/weatherContext"

type Props = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onOptionSelect: (option: optionType) => void,
  onSubmit: () => void,
}

const Search = ({
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props
): JSX.Element => {

  const contextData = useWeather()
  console.log(contextData);


  return (
    <section className="m-auto text-center w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
        <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
        {/* <p className="mt-2 text-sm">Enter below a place you want to know the weather of and select an option from dropdown</p> */}
        <div className="relative text-center mt-10 md:mt-4">
          <input type="text" value={contextData?.term} className="px-2 py-1 rounded-l-md border-white border-y-2" onChange={onInputChange} />
          <ul className="scroll-smooth absolute top-9 ml-5 bg-white rounded-tl-md rounded-br-md">
            {contextData?.options.map((option: optionType, index: number) => (
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
        {contextData.forecast ? (
          <Forecast data={contextData.forecast}/>
        ) :
          (
            <div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-[100vh] lg:h-[100vh] rounded drop-shadow-lg text-zinc-700"></div>
          )}
      </div>

    </section>
  )
}

export default Search