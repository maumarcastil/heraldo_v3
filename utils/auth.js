import axios from "axios";

export const loginUser = async (data, setUser) => {
  return await axios
    .post("/api/login", data)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const registerUser = async (data, setUser) => {
  return await axios
    .post("/api/user", data)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};
