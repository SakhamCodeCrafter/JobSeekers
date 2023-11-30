// Job.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Job = ({ onClose, updateSubmittedData }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    companyName:"",
    Experience: "",
    location: "",
    salaryRange: "",
    employmentType: "Full-Time",
    applicationDeadline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/jobs", formData);
      // console.log(response.data);
      updateSubmittedData(response.data);

      setFormData({
        title: "",
        image: "",
        Experience: "",
        companyName:"",
        location: "",
        salaryRange: "",
        employmentType: "Full-Time",
        applicationDeadline: "",
      });

      // Close the Job component
      onClose();

      toast.success("Job listing submitted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting job listing", error);
      alert("Error submitting job listing");
    }
  };

  return (
    <div className="job-container bg-gray-200 p-6 rounded-lg shadow-md w-[80%] md:w-[40%] mx-auto my-10">
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-xl cursor-pointer focus:outline-none"
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </div>
      <form className="space-y-4">
      <div>
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700"
          >
            Company:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>


        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image-Link:
          </label>
          <input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Job Image"
              className="mt-2 rounded-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>

        <div>
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700"
          >
            Experience:
          </label>
          <input
            type="text"
            id="requirements"
            name="Experience"
            value={formData.Experience}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="salaryRange"
            className="block text-sm font-medium text-gray-700"
          >
            Salary Range:
          </label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="employmentType"
            className="block text-sm font-medium text-gray-700"
          >
            Employment Type:
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="applicationDeadline"
            className="block text-sm font-medium text-gray-700"
          >
            Application Deadline:
          </label>
          <input
            type="DATE"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Job;
