import axios from "../utils/baseAxios";

let supplier = {
    /*
    findAll
     */
    findAll(currentPage, pageSize) {
        return axios.get(`supplier?currentPage=${currentPage}&pageSize=${pageSize}`);
    },
    /*
    findById
     */
    findById(id){
        return axios.get(`supplier/${id}`);
    },
    /*
    添加
     */
    addEntity(entity){
        return axios.post(`supplier`, entity);
    },
    /*
    修改
     */
    updateEntity(entity){
        return axios.put(`supplier`, entity);
    },
    /*
    删除
     */
    deleteByIds(ids){
        return axios.delete(`supplier/${ids}`);
    }
}
export default supplier;