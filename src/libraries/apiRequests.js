'use strict'

export const saveDiscoToAPI = async (disco) => {
  try {
    const response = await fetch("http://localhost:3000/discos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(disco),
    });
    if (!response.ok) throw new Error("Failed to save disco");
    return await response.json();
  } catch (error) {
    throw error;
  }
};