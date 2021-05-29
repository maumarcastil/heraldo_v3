import dbConnect from "utils/dbConnect";

dbConnect();

export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
