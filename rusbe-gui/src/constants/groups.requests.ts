import axios from 'axios'
import {RequestConstants} from './RequestConstants'

const groupsRequest = axios.create({
    baseURL: new RequestConstants().REQUEST_URL
})

export const getUserGroups = async (userId: string)=>{
    const resp = await groupsRequest.get(`/userGroups?id=${userId}`)
    return resp.data;
}