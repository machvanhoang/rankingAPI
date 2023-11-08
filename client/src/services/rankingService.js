import { authAxios } from "../lib/axios";
export const pageSpeedChecking = async (form) => {
    return await authAxios.post('/ranking/page-speed', form)
        .then((response) => {
            return response.data;
        }).catch((error) => console.error(error));
}
