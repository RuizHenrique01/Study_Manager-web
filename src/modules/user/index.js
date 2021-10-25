import instance from '~/services/api';

export const UserServices = {

    async create({ name, username, email, password }) {
        const response = await instance.post('/user/signup', {
            name,
            username,
            email,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        return response.data;
    }
}