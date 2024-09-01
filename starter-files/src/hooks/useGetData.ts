import { optionType } from "../types"

export const getOptionData = async(value:string) => {
    const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
    return await data.json()
}

export const getForecastData = async(lat : number,lon : number) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    return await data.json()
}