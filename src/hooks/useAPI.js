import React, { useState } from 'react';

export const useAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiRequest = async (url, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      }
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const get = (url) => {
    return apiRequest(url);
  };

  return { get }
}