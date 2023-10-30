export const clearAllLocal = () => {
  sessionStorage.clear();
};

export const getLocalToken = () => {
  return sessionStorage.getItem('authorization');
};

export const setLocalToken = (token: string) => {
  return sessionStorage.setItem('authorization', token);
};
