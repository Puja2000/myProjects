export type optionType = {
    name:string,
    country: string
    lat: number
    lon: number
}

export type forecastType = {
    name : string,
    country : string,
    sunrise : number,
    sunset : number,
    list : [
        {
            dt : number,
            main : {
                feels_like : number,
                humidity : number,
                pressure : number,
                temp : number,
                temp_max : number,
                temp_min : number
            }

            weather : [
                {
                    main : string,
                    description : string,
                    icon : string
                }
            ]
            wind : {
                deg : number,
                gust : number,
                speed : number
            }
            clouds : {
                all : number
            }
            pop : number
            visibility : number
        }
    ]
}

export interface weatherContextType {
    // data : forecastType | null
    term : string | ''
    setTerm : React.Dispatch<React.SetStateAction<string>>
    options : [],
    setOptions : React.Dispatch<React.SetStateAction<[]>>,
    searchCity : optionType | null,
    setSearchCity: React.Dispatch<React.SetStateAction<optionType | null>>,
    forecast : forecastType | null,
    setForecast :  React.Dispatch<React.SetStateAction<forecastType | null>>,
    getForecast : (searchCity : optionType) => void
    // fetchOption : (value : string) => Promise<void>
    // fetchData : (city : string) => Promise<void>
}