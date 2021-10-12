import instance from '~/services/api';

export const SessionServices = {
    async login({ email, password }) {
        try {
            const response = await instance.post('/user/login', {
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