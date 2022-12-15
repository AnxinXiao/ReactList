import { createSlice } from "@reduxjs/toolkit"

export const todoListSlice = createSlice({
    //- 切片的命名空间
    name: 'todoList',
    //- 初始化仓库数据
    initialState: {
        list: [
            { content: "学习 React", status: false },
            { content: "学习 Vue", status: false },
            { content: "学习 Angular", status: false },
            { content: "学习 Java", status: false },
        ]
    },
    //- reducers
    reducers: {
        /**
         * 
         * @param {*} state 上一次的仓库状态
         * @param {*} param1 传递过来的数据
         */
        add: (state, { payload }) => {
            //- 允许你直接修改 state
            //- 底层使用 immer.js库
            state.list.push({
                content: payload,
                status: false
            })
        },
        del: (state, { payload }) => {
            state.list.splice(payload, 1)
        },
        change: (state, { payload }) => {
            state.list[payload].status = !state.list[payload].status
        }
    }
})

export const { add, del, change } = todoListSlice.actions

export default todoListSlice.reducer