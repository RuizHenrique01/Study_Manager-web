import instance from '~/services/api';

export const SessionServices = {
    async login({ email, password }) {
        const response = await instance.post('/user/login', {
            email,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).catch(error => error);

        return response.data;
    }
}