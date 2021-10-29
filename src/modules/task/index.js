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

    async updateTask({ id, idProject, name, description, date, isCompleted, token }) {
        const response = await instance.patch("/projects/" + idProject + "/task/" + id, {
            isCompleted: isCompleted,
            name,
            description,
            date
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).catch(error => error);

        return response.data;
    },
    async deleteTask({ id, idProject, token }) {
        const response = await instance.delete("/projects/" + idProject + "/task/" + id,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).catch(error => error);

        return response.data;
    }
}