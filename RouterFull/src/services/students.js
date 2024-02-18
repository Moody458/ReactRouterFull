import axios from "axios";

export const getStudents = async (number = 5) => {
  const { data } = await axios.get(
    `https://randomuser.me/api/?results=${number}`
  );
  return data.results;
};

export const getSingleStudent = async (uuid) => {
  const { data } = await axios.get(`https://randomuser.me/api/?uuid=${uuid}`);
  return data.results[0];
};
