import { authAxios } from "../lib/axios";
export const authLogOut = async () => {
    return await authAxios.post('/user/logout')
        .then((response) => {
            return response.data;
        }).catch((error) => console.error(error));
}

export const getUser = async () => {
    return await authAxios.get('/user')
        .then((response) => {
            return response.data;
        }).catch((error) => console.error(error));
}

