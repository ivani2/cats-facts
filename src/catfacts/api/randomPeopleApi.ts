import axios from "axios";

const randomPeopleApi = axios.create({
    baseURL: 'https://randomuser.me'
})
export { randomPeopleApi }
