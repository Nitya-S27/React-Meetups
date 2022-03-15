import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://Admin-Nitya:Test123@cluster0.p7orv.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetupsCollection");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
}
// mongodb+srv://Admin-Nitya:<password>@cluster0.p7orv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
export default handler;
