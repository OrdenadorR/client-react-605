'use strict';

export const getDiscErrors = (disc) => {
  let errors = [];

  if (!disc.name || !disc.name.trim()) {
    errors = [...errors, 'Se requiere el nombre del disco.'];
  }

  if (!disc.artist || !disc.artist.trim()) {
    errors = [...errors, 'Se requiere nombre del artista.'];
  }

  if (!disc.year) {
    errors = [...errors, 'El año es necesario.'];
  } else if (Number(disc.year) < 1900) {
    errors = [...errors, 'Año no válido.'];
  }

  if (!disc.genre) {
    errors = [...errors, 'Se requiere género.'];
  }

  return errors;
};
