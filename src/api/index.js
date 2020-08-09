import axios from "@/axios.js"
const api = {
    getSearchHotWords() {
      return axios.get('/api/meituan/header/searchHotWords.json');
    },
    getSearchList() {
        return axios.get('/api/meituan/header/search.json');
      }
    ,
    resultsByKeywords(){
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    goodsList(){
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getProvince(){
        return axios.get('/api/meituan/city/province.json')
    },
    getHotCity(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecentlyCity(){
        return axios.get('/api/meituan/city/recents.json')
    },
    getCurrentPosition(){
        return axios.get('/api/meituan/city/getPosition.json')
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getLoginInfo(params){
        return axios.get('/api/meituan/login', params)
    },
    getRegister(params){
        return axios.get('/api/meituan/register',params)
    }
}
export default api;
