import dbConnect from "../../util/dbConnect";
import Transaction from "../../models/Transaction";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "DELETE":
      try {
        await Transaction.findByIdAndDelete(req.query._id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
