import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/tests";

export const testServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        getAll: async () => {
            const response = await request.get(baseUrl);
            return response;
        },
        create: async (data) => {
            const response = await request.post(baseUrl, data)
            return response;
        },
        getOne: async (id) => {
            const response = await request.get(`${baseUrl}/${id}`);
            return response;
        },
    }
}