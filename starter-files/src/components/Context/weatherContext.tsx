import { createContext, ReactNode, useContext, useState } from "react";
import { forecastType, optionType, weatherContextType } from "../../types";
import { getForecastData } from "../../hooks/useGetData";



const WeatherContext = createContext<weatherContextType | undefined>(undefined);

export const useWeather = (): weatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
interface ThemeProviderProps {
  children: ReactNode;
}

export const WeatherContextProvider : React.FC<ThemeProviderProps> = ({children}) => {

    const [term,setTerm] = useState<string>('')
    const [options,setOptions] = useState<[]>([])
    const [searchCity,setSearchCity] = useState<optionType | null>(null);
    const [forecast,setForecast] = useState<forecastType | null>(null)

    const getForecast = (searchCity:optionType) =>{
        
        getForecastData(searchCity.lat,searchCity.lon)
        .then((data)=>{
              const forecastData = {...data.city,list:data.list.slice(0,16)}
              setForecast(forecastData)
        })
      }
      

    return(
        <WeatherContext.Provider value={{term,setTerm,options,setOptions,searchCity,setSearchCity,forecast,setForecast,getForecast}}>
        {children}
        </WeatherContext.Provider>
    )

    
}