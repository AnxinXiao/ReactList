//- 生产 action 对象的函数，一般称之为 actionCreator

import { ADD, CHANGE, DEL } from './actionType';

export const addListAction = newItem => ({
    type: ADD,
    data: newItem
})

export const delListAction = index => ({
    type: DEL,
    data: index
})

export const changeAction = index => ({
    type: CHANGE,
    data: index
})