export const clearAllLocal = () => {
  sessionStorage.clear();
  localStorage.clear();
};

export const getLocalToken = () => {
  return localStorage.getItem('authorization');
};

export const setLocalToken = (token: string) => {
  return localStorage.setItem('authorization', token);
};
