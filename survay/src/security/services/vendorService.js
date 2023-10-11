import axiosIntance from "../interceptor";

export const addSurvay = async (data) => {
  const response = await axiosIntance.post("/api/add-survay", data);
  return response.data;
};

export const getSurvayResult = async () => {
  const response = await axiosIntance.get("/api/get-survay-result");
  return response.data;
};
