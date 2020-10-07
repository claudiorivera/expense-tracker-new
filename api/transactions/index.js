import Transaction from "../../models/Transaction";
import dbConnect from "../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const transactions = await Transaction.find({});
        if (!transactions) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, transactions });
      } catch ({ message }) {
        res.status(400).json({ success: false, message });
      }
      break;
    case "POST":
      try {
        const addedTransaction = await Transaction.create(req.body);
        if (!addedTransaction) return res.status(400).json({ success: false });
        res.status(201).json({ success: true, addedTransaction });
      } catch ({ message }) {
        res.status(400).json({ success: false, message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
