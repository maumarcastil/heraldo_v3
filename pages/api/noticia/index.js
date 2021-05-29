import dbConnect from "utils/dbConnect";
import Noticia from "models/noticia";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const noticias = await Noticia.find({});

        res.status(200).json({ success: true, data: noticias });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const noticia = await Noticia.create(req.body);
        res.status(200).json({ success: true, data: noticia });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
