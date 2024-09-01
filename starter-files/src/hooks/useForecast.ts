import { ChangeEvent, useContext, useEffect, useState } from "react"
import { optionType } from "../types"
import { getOptionData } from "./useGetData"
import { useWeather} from "../components/Context/weatherContext"

const useForeCast = () => {
  const contextData = useWeather()

  const getSearchOption = async(value:string)=>{
    getOptionData(value)
    .then((data)=>{contextData?.setOptions(data)
    })
  }
  const onInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const value=e.target.value.trim()
    contextData?.setTerm(value)

    if(value==='')return
    getSearchOption(value)
  }


  const onOptionSelect = (option:optionType)=>{
    contextData.setSearchCity(option)
  }

 
  const onSubmit = ()=>{
    if(!contextData.searchCity) return 
    contextData.getForecast(contextData.searchCity)
  }

  useEffect(()=>{
    if (contextData.searchCity){
      contextData?.setTerm(contextData.searchCity?.name)
      contextData?.setOptions([])
    }
  },[contextData.searchCity])

  return{
    onInputChange,
    onOptionSelect,
    onSubmit
  }
}

export default useForeCast