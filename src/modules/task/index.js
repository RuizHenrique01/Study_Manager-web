import instance from '~/services/api';

export const TaskServices = {

    async createTask({ idProject, name, description, date, token }) {
        const response = await instance.post("/projects/" + idProject + "/task", {
            name,
            description,
            date
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).catch(error => error);

        return response.data;
    },

    async getTasks({ idProject, token }) {
        const response = await instance.get("/projects/" + idProject + "/task", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).catch(error => error);

        return response.data;
    },

    async updateTask({ id, idProject, isCompleted, token }) {
        const response = await instance.patch("/projects/" + idProject + "/task/" + id, {
            isCompleted: !isCompleted
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).catch(error => error);

        return response.data;
    }
}