import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async (number = 5) => {
      try {
        const { data } = await axios.get(
          `https://randomuser.me/api/?results=${number}`
        );
        // Extract the array of students from the API response and set it
        setStudents(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call getStudents when component mounts
    getStudents();
  }, []); // Add [] as dependency to run only once when component mounts

  return (
    <DataContext.Provider value={{ students }}>
      {props.children}
    </DataContext.Provider>
  );
}
