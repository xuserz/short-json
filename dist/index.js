'use strict';

const renameKey$1 = (obj, oldKey, newKey) => {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
};
const short_json = (data, names = {}) => {
  if (!data)
    return data;
  var is_array = true;
  if (!data[0]) {
    data = [data];
    is_array = false;
  }
  for (var key of data) {
    const keyNames = Object.keys(key);
    for (var keyName of keyNames) {
      if (key[keyName]) {
        const newName = getNameShort$1(keyName, names);
        renameKey$1(key, keyName, newName);
        if (key[newName]) {
          if (typeof key[newName] === "object" || Array.isArray(key[newName])) {
            short_json(key[newName], names);
          }
        }
      }
    }
  }
  return {
    data: !is_array ? data[0] : data,
    short_json: names
  };
};
const getNameShort$1 = (old_name, names) => {
  const get_name = Object.keys(names);
  if (!get_name.find((name) => name == old_name)) {
    var newName = get_name.length;
    names[old_name] = newName;
    return newName;
  } else
    return names[old_name];
};

const renameKey = (obj, oldKey, newKey) => {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
};
const deshort_json = ({
  data,
  short_json
}) => {
  if (!data)
    return data;
  var is_array = true;
  if (!data[0]) {
    data = [data];
    is_array = false;
  }
  for (var key of data) {
    const keyNames = Object.keys(key);
    for (var keyName of keyNames) {
      if (key[keyName]) {
        const newName = getNameShort(Number(keyName), short_json);
        renameKey(key, keyName, newName);
        if (key[newName]) {
          if (typeof key[newName] === "object" || Array.isArray(key[newName])) {
            deshort_json({ data: key[newName], short_json });
          }
        }
      }
    }
  }
  return !is_array ? data[0] : data;
};
const getNameShort = (index_name, names) => {
  const keys = Object.keys(names);
  return keys[index_name];
};

exports.deshort_json = deshort_json;
exports.short_json = short_json;
