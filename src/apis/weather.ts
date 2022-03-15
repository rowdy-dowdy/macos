const APPID = import.meta.env.VITE_KEY_OPENWEATHERMAP || ""

export const getWeather_api = async (data: {lat: number, lon: number, lang: string}) => {
  try {
  
    const res = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${APPID}&lang=${data.lang}`, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    });

    const resJSON = await res.json()

    if (res.ok) 
      return resJSON
    else {
      throw { message: resJSON.message }
    }

  } catch (err) {
    throw err
  }
}
