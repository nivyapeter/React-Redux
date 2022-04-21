import axios from "axios";

export const fetchStudentData = async() => {

  try {
    
   await axios.get("https://school-lorien.herokuapp.com/school/students/").then(res => {
    return res.data
  }) 
    

  } catch (err) {
    console.error(err);
    return false;
  }

  //   const response = await axios.get(
  //     "https://school-lorien.herokuapp.com/school/students/"
  //   );
  //   return response.data;
};
