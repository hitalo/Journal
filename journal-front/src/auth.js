import axios from 'axios';

export const isAuthenticated = async () => {
    try {
        return await axios.post('/projects/logged-in', {});
    } catch(err) {
        console.log(err.response.data.error);
        return false;
    }
    
};