import axios from "axios";
const BASE_URL = "http://localhost:5000"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDdiNjA2ZjU0YTBhZjY0ZTRlMzVlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODI1NDI2MCwiZXhwIjoxNjk4ODU5MDYwfQ.laIFijNrr43KIs2bAqZ4jSIbB4amtqLcSFC3IZIOLv4"




export const publicRequest = axios.create({
  baseURL : BASE_URL
});

export const userRequest = axios.create({
  baseURL :BASE_URL,
  headers : {token :`Bearer ${TOKEN}`}
})