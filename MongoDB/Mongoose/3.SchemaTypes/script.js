const myMongoose = require("mongoose");
const Students = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//store the documents in created collection
async function studentData() {
  try {
    const student1 = await Students.create({
      name: "Sanga",
      age: "bjbjdgkd",
      hobbies: ["Coding", "Reading blogs"],
    });
    await student1.save();
    console.log("Student1 data stored");
  } catch (err) {
    console.log(err.message);
  }
}

studentData();
