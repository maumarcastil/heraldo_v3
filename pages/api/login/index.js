import dbConnect from "utils/dbConnect";
import User from "models/user";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  const { usuario, contrasena } = req.body;

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({
          usuario: usuario,
          contrasena: contrasena,
        });
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
