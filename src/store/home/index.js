import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api";
//四大核心属性
//state：仓库数据的来源
const state = {
    categoryList: [],
    bannerList:[],
    floorList:[],

};
//mutations:唯一可以改变state数据地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },

    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },

    GETFLOORLIST: (state, floorList) => {
        state.floorList = floorList;
    }  

};
//actions:可以处理dispatch派发action地方，这里可以书写你的业务逻辑：for、if、异步语句等等
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            //提交mutation
            commit("CATEGORYLIST", result.data.splice(0, 15));
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            //提交mutation
            commit("GETBANNERLIST", result.data);
        };
    },

    //获取Floor的数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data);
        }
    },

};
//getters：计算属性
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}