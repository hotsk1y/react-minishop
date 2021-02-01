export const get = (item) => {
  const gotItem = localStorage.getItem(item);
  return gotItem ? JSON.parse(gotItem) : [];
};

export const set = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};

export const remove = (item) => {
  localStorage.removeItem(item);
};

export const clearAll = () => {
  localStorage.clear();
}
