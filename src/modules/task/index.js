import instance from '~/services/api';

export const TaskServices = {

    async createTask({ id, name, description, date, token }) {
        try {
            const response = await instance.post("/projects/" + id + "/task", {
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
    }
}