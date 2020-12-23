export default (name) => {
  if (name.length < 20 && name.length > 0) {
    return true;
  }
  return false;
};