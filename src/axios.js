import axios from 'axios';
const instance=axios.create({
    baseURL:' http://localhost:5001/clone-b5c4f/us-central1/api',
});
export default instance;