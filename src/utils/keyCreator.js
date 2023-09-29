export const keyCreator = (index) => {
  return `${Date.now() * Math.random() - index}`;
};
