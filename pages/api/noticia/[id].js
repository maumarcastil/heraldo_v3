import dbConnect from "utils/dbConnect";
import Noticia from "models/noticia";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const noticia = await Noticia.findById(id);

        if (!noticia) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: noticia });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const noticia = await Noticia.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!noticia) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: noticia });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deleteNoticia = await Noticia.deleteOne({ _id: id });

        if (!deleteNoticia) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
