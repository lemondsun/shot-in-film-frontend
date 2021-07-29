import axios from "axios";

const baseUrl = "https://polar-thicket-70692.herokuapp.com";
// const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl
});

export const getAllPhotos = async () => {
  const resp = await api.get("/photos");
  return resp.data;
}

export const uploadPhoto = async (formData) => {
  const resp = await api.post('/photos', formData)
  return resp.data;
}

export const deletePhoto = async (photoId) => {
  await api.delete(`/photos/${photoId}`)
}