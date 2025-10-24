import { useState } from "react";
import { FormTemplate } from "./FormTemplate";

export function EntryPage() {
  const [formData, setFormData] = useState({
    profileName: "",
    profileJob: "",
  });

  const [buttonDisable, setDisable] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Check if both fields have values
    if (updatedFormData.profileName && updatedFormData.profileJob) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name: formData.profileName,
      job: formData.profileJob,
    };

    try {
      const response = await fetch("https://reqres.in/api/users", getOptions(payload));
      const responseData = await response.json();
      console.log("✅ Submitted:", responseData);
      alert(`User created: ID = ${responseData.id}`);
    } catch (error) {
      console.error("❌ Submission failed:", error);
    }
  };

  const getOptions = (payload) => {
    return {
      method: "POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json",
        'x-api-key':'reqres-free-v1'
    },
      body: JSON.stringify(payload),
    };
  };

  return (
    <div className="container">
      <FormTemplate
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        buttonDisable={buttonDisable}
      />
    </div>
  );
}
