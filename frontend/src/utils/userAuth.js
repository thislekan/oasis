const token = sessionStorage.getItem('token');
const userAuth = {
  isAuthenticated: false,
  authenticate: () => {
    if (token) userAuth.isAuthenticated = true;
    return userAuth.isAuthenticated;
  },
  signOut: () => {
    if (token) sessionStorage.removeItem('token');
  },
};

export default userAuth;
