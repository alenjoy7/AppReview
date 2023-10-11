import axiosIntance from "../interceptor";

/**
 * func to add survay data
 * @param {*} data 
 * @returns 
 */
export const addSurvay = async (data) => {
  const response = await axiosIntance.post("/api/add-survay", data);
  return response.data;
};

/**
 * func to get the survay data from server
 * @returns survay data
 */
export const getSurvayResult = async () => {
  const response = await axiosIntance.get("/api/get-survay-result");
  return response.data;
};
