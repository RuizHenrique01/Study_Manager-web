import instance from '~/services/api';

export const TaskServices = {

    async createTask({ idProject, name, description, date, token }) {
        try {
            const response = await instance.post("/projects/" + idProject + "/task", {
                name,
                description,
                date
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            return response;
        } catch {
            return undefined;
        }
    },

    async updateTask({ id, idProject, isCompleted, token }) {
        try {
            const response = await instance.patch("/projects/" + idProject + "/task/" + id, {
                isCompleted: !isCompleted
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            
            return response;
        } catch {
            return undefined;
        }
    }
}