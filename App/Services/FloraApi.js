import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })

   // const getId = (id) => api.get(`/flora/${id}`)
   // const getList = () => api.get(`/ficha-area-protegida/parque-nacional-los-glaciares/flora/`)
   // const search = (name) => api.get('/ficha-area-protegida/parque-nacional-los-glaciares/search/flora/', {q: name})

   jsonFlora = {
      "id": "1",
      "Name": "Rosa",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "photo": "https://picsum.photos/300/300"
   }

   jsonListFlora = [
      {
        "id": "1",
        "Name": "Rosa",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "photo": "https://picsum.photos/300/300"
      },
      {
         "id": "2",
         "Name": "Margarita",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
         "photo": "https://picsum.photos/300/300"
       },
       {
         "id": "3",
         "Name": "Tulipan",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
         "photo": "https://picsum.photos/300/300"
       },
       {
         "id": "4",
         "Name": "Suculenta",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
         "photo": "https://picsum.photos/300/300"
       }
   ]

   const getId = (id) => Promise.resolve(jsonFlora)
   const getList = () => Promise.resolve(jsonListFlora)

   return {
      getId,
      getList
   }
}

export default {
   create
}
