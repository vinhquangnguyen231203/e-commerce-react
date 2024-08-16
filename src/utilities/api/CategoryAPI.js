import axiosClient from "./AxiosClient"

const categoryAPI = {
    async getAll(p) {
        try{
            const res = await axiosClient({
                method: 'get',
                url: '/categories',

            })
            return res
        }
        catch(error) {
            throw error
        }
    },
    async get(id) {
        try{
            const res = await axiosClient({
                method: 'get',
                url: `/products/${id}`
            })
            return res
        }
        catch(error){
            throw error
        }
    }
}

export default categoryAPI