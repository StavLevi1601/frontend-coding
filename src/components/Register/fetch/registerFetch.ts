import { Schema } from "../validations";

export const registerFetch = async (data: Schema) => {
  try {
    const response = await fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Registered successfully");
    } else {
      throw new Error("Failed to register");
    }
  } catch (e) {
    console.error(e);
    alert("Failed to register");
  }
};
