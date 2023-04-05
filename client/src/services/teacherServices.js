import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/teachers";

export const teacherServiceFactory = (token) => {
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
        edit: async (id, value) => {
            const response = await request.put(`${baseUrl}/${id}`, value);
            return response;
        },
        deleteTeacher: async (teacherId) => {
            const response = await request.delete(`${baseUrl}/${teacherId}`);
            return response;
        }
    };
};
