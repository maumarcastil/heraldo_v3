import axios from "axios";

export const getAllNotices = async (setNoticia) => {
  await axios
    .get("/api/noticia")
    .then((response) => {
      if (response.status === 200) {
        setNoticia(response.data.data);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const createNotice = async (data, setOpen) => {
  return await axios
    .post("/api/noticia", data)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
        setOpen(false);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const eliminarNoticia = async () => {
  await axios
    .get("/api/noticia")
    .then((response) => {
      if (response.status === 200) {
        console.log("Eliminado");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
