import instance from '~/services/api';

export const ProjectServices = {

    async getProjects({ token }) {
        const response = await instance.get("/projects", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).catch(error => error);

        return response.data;
    },

    async createProject({ name, description, token }) {
        const response = await instance.post('/projects', {
            name,
            description
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).catch(error => error);

        return response.data;
    },

    async updateProject({ id, name, description, token }) {
        const response = await instance.patch('/projects/' + id, {
            name,
            description
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).catch(error => error);

        return response.data;
    },

    async deleteProject({ id, token }) {
        const response = await instance.delete('/projects/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).catch(error => error);

        return response.data;
    }
}