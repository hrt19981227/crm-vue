import axios from "../utils/baseAxios";

let brand = {
    /*
    findAll
     */
    findAll(currentPage, pageSize) {
        return axios.get(`brand?currentPage=${currentPage}&pageSize=${pageSize}`);
    },
    /*
    findById
     */
    findById(id){
        return axios.get(`brand/${id}`);
    },
    /*
    添加
     */
    addEntity(entity){
        return axios.post(`brand`, entity);
    },
    /*
    修改
     */
    updateEntity(entity){
        return axios.put(`brand`, entity);
    },
    /*
    删除
     */
    deleteByIds(ids){
        return axios.delete(`brand/${ids}`);
    }
}
export default brand;