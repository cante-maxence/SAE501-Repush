export const AuthGuard = (to, from, next) => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    next("/login");
  } else {
    next();
  }
};

export default AuthGuard;
