export function mergeFirstDeep({ oldInfo, newInfo }) {
  Object.keys(newInfo).reduce((result, id) => {
    result[id] = {
      ...oldInfo[id],
      ...newInfo[id]
    };

    return result;
  }, {});
}
