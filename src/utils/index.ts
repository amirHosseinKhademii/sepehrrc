export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  //console.log(dragResult);

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]; // [0] for remove arr and convert to object
  }

  if (addedIndex !== null) {
    //result.splice(addedIndex, 0, itemToAdd);
    result.splice(addedIndex, 0, payload);
  }

  return result;
};

export const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};
