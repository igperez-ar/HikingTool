import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })
   
   // const getId = (id) => api.get(`/fauna/${id}`)
   // const getList = () => api.get(`/ficha-area-protegida/parque-nacional-los-glaciares/fauna`)
   // const search = (name) => api.get('/ficha-area-protegida/parque-nacional-los-glaciares/search/fauna/', {q: name})

   jsonFauna = {
      "id": "1",
      "Name": "Castor",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "photo": "https://picsum.photos/300/300?grayscale"
    }

   jsonListFauna = [
      {
        "id": "1",
        "Name": "Castor",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "photo": "https://picsum.photos/300/300?grayscale"
      },
      {
         "id": "2",
         "Name": "Zorro Colorado",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
         "photo": "https://picsum.photos/300/300?grayscale"
       },
       {
         "id": "3",
         "Name": "Caballo",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
         "photo": "https://picsum.photos/300/300?grayscale"
       },
       {
         "id": "4",
         "Name": "Pajaro Carpintero",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
         "photo": "https://picsum.photos/300/300?grayscale"
       }
   ]

   const getId = (id) => Promise.resolve(jsonFauna)
   const getList = () => Promise.resolve(jsonListFauna)

   return {
      getId,
      getList
   }
}

export default {
   create
}