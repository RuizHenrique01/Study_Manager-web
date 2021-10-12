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
    }
}