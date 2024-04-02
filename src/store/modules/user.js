import { createSlice } from "@reduxjs/toolkit";

import {request} from '@/utils/request'

const userStore = createSlice({
    name:'user',
    initialState:{
        token:''
    },
    //同步修改方法
    reducers:{

        setToken(state,action){
            state.token = action.payload
        }

    }

})

//解构出actioncreater
const  {setToken} = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法 完成登录token的获取 
const fechLogin = (loginForm)=>{
    return async (dispatch)=>{
       const res = await request.post('/authorizations',loginForm)
       dispatch(setToken(res.data.token))
       
    }
}

export {setToken,fechLogin}

export default userReducer 