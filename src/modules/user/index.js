import instance from '~/services/api';

export const UserServices = {

    async create({ name, username, email, password }) {
        try {
            const response = await instance.post('/user/signup', {
                name,
                username,
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/json' }
            });
            
            return response.data;
        } catch {
            return undefined;
        }
    }
}