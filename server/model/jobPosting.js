const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  image: String,
  Experience: String,
  companyName:String,
  location: String,
  salaryRange: String,
  employmentType: String,
  applicationDeadline: String,
  EmpId: String,
  EmpEmail: String,
});

const Job = mongoose.model("Jobpost", jobSchema);

module.exports = Job;
