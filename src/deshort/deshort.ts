const renameKey = (obj: any, oldKey: string, newKey: string) => {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

const deshort_json = ({
  data,
  short_json
}: {
  data: any,
  short_json: any
}) => {
  if (!data) return data
  var is_array = true;
  if (!data[0]) { data = [data]; is_array = false; }

  for (var key of data) {
    const keyNames = Object.keys(key);
    for (var keyName of keyNames) {
      if (key[keyName]) {
        const newName = getNameShort(Number(keyName), short_json);
        renameKey(key, keyName, newName);

        if (key[newName]) {
          if (typeof key[newName] === 'object' || Array.isArray(key[newName])) {
            deshort_json({ data: key[newName], short_json });
          }
        }

      }
    }
  }

  return !is_array ? data[0] : data
}

const getNameShort = (index_name: number, names: any) => {
  const keys = Object.keys(names);
  return keys[index_name];
}

export default deshort_json;