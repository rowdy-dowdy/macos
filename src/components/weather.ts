import { getWeather_api } from '../apis/weather'

const getLocation = async (options: Object | undefined = undefined) => {
  try {
    const location: Promise<GeolocationPosition> = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    });

    return location

  } catch (err) {
    throw err
  }
}

const getLang = async () => {
  try {
    
    return navigator.language

  } catch (error) {
    throw error
  }
}

const getWeather = async() => {
  try {
    
    const location  = await getLocation()
    const lang      = await getLang()
    const result    = await getWeather_api({
      lat:  location.coords.latitude,
      lon:  location.coords.longitude,
      lang: lang
    })

    return result

  } catch (error) {
    throw error
  }
}

export {
  getWeather
}