//- 引入创建仓库的方法
import { configureStore } from "@reduxjs/toolkit"
import todoListReducer from "./todoListSlice"

//- 调用该方式时，传入一个配置对象
//- 其中一个选项是配置 reducer
export default configureStore({
    reducer: {
        todo: todoListReducer
    }
})