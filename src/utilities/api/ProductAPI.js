


import axiosClient from "./AxiosClient";

const productAPI = {
    async getAll(params) {
        try{
            const newParams = {...params}
            newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);

            delete newParams._page

            const productList = await axiosClient({
                method: 'get',
                url: '/products',
                params: newParams
            })
            const count = await axiosClient({
                method: 'get',
                url: '/products/count',
                params: newParams
            })

            return {
                data: productList,
                pagination: {
                    page: params._page,
                    limit: params._limit,
                    total: count
                }
            }
            
        }
        catch(error) {
            throw error
        }
    },
    

    async get(id) {
        try{
            const res = await axiosClient({
                method: 'get',
                url : ` /products/${id}`
            })
            return res
        }
        catch(error) {
            throw error
        }
    }
}

export default productAPI