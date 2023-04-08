const renameKey = (obj: any, oldKey: string, newKey: string) => {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

const short_json = (data: any, names: Object = {}) => {
  if (!data) return data
  var is_array = true;
  if (!data[0]) { data = [data]; is_array = false; }

  for (var key of data) {
    const keyNames = Object.keys(key);
    for (var keyName of keyNames) {
      if (key[keyName]) {
        const newName = getNameShort(keyName, names);
        renameKey(key, keyName, newName);

        if (key[newName]) {
          if (typeof key[newName] === 'object' || Array.isArray(key[newName])) {
            short_json(key[newName], names);
          }
        }

      }
    }
  }

  return {
    data: !is_array ? data[0] : data,
    short_json: names
  }
}

const getNameShort = (old_name: string, names: any) => {
  const get_name = Object.keys(names);
  if (!get_name.find(name => name == old_name)) {
    var newName = get_name.length;
    names[old_name] = newName
    return newName
  } else return names[old_name];
}

export default short_json;