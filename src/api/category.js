import axios from "../utils/baseAxios";

let category = {
    /*
    得到树形数据
     */
    getTreeData() {
        return axios.get(`category/getTreeData`);
    },
    /*
    findAll
     */
    findAll(currentPage, pageSize) {
        return axios.get(`category?currentPage=${currentPage}&pageSize=${pageSize}`);
    },
    /*
    findById
     */
    findById(id){
        return axios.get(`category/${id}`);
    },
    /*
    添加
     */
    addEntity(entity){
        return axios.post(`category`, entity);
    },
    /*
    修改
     */
    updateEntity(entity){
        return axios.put(`category`, entity);
    },
    /*
    删除
     */
    deleteByIds(ids){
        return axios.delete(`category/${ids}`);
    }
}
export default category;