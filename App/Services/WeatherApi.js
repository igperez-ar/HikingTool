import apisauce from 'apisauce'

const APIKEY = 'uq9H402SqvnSRQl4GChkNvrZ1tGjOMLl'

const create = (baseURL = 'http://dataservice.accuweather.com') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })

   const getWeather = () => api.get(`/forecasts/v1/daily/5day/6462?apikey=${APIKEY}&language=en-us&details=true&metric=false`)

   return {
      getWeather,
   }
}

export default {
   create
 }
 