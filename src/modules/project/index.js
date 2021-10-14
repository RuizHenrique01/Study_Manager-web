import instance from '~/services/api';

export const ProjectServices = {

    async getProjects({ token }) {
        try {
            const response = await instance.get("/projects", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            return response.data;
        } catch {
            return undefined;
        }
    },

    async createProject({ name, description, token }) {
        try {
            const response = await instance.post('/projects', {
                name,
                description
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            return response.data;
        } catch {
            return undefined;
        }
    }
}