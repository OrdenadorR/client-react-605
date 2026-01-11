import { createContext, useEffect, useState } from "react";

export const DiscoContext = createContext();

export const DiscosProvider = ({ children }) => {
  const [discos, setDiscos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscos = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:3000/discos");
        if (!res.ok) throw new Error("Error cargando discos");
        const data = await res.json();
        setDiscos(data);
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    };

    fetchDiscos();
  }, []);

  const addDisco = async (disco) => {
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/discos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(disco),
      });
      if (!res.ok) throw new Error("No se pudo guardar el disco");
      const newDisco = await res.json();
      setDiscos((prev) => [...prev, newDisco]);
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const removeDisco = async (id) => {
    setError(null);
    try {
      const res = await fetch(`http://localhost:3000/discos/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("No se pudo eliminar el disco");
      setDiscos((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const updateDisco = async (id, updatedData) => {
    setError(null);
    try {
      const res = await fetch(`http://localhost:3000/discos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) throw new Error("No se pudo actualizar el disco");
      const updatedDisco = await res.json();
      setDiscos((prev) =>
        prev.map((d) => (d.id === id ? updatedDisco : d))
      );
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const providedContextValue = {
    discos, loading, error,
    addDisco, removeDisco, updateDisco
  }

  return (
    <DiscoContext.Provider value={providedContextValue }>
      {children}
    </DiscoContext.Provider>
  );
};