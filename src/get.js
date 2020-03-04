/**
 * get
 *
 * De ser posible obtiene el valor de la propiedad el string de keys
 * o el valor setDefault en caso de no encontrar un valor
 *
 * @param object {Object}
 * @param keys {String}
 * @param setDefault {any}
 * @returns {object[keys]}
 */
const get = (object, keys = "", setDefault = "") => {
  if (!object) return setDefault;
  const arrKeys = keys.split(".");
  const key = arrKeys[0];
  const nextObject = object[key];
  if (typeof nextObject !== "undefined") {
    return typeof arrKeys[1] !== "undefined"
      ? get(nextObject, keys.replace(`${key}.`, ""), setDefault)
      : nextObject;
  } else {
    return setDefault;
  }
};
module.exports = get;
