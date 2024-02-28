export const useGetUserInfo = () => {
<<<<<<< HEAD
  if(localStorage.getItem("auth") == null){
    return false;
  }
=======
>>>>>>> origin/main
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );
  return { name, profilePhoto, userID, isAuth };
};
