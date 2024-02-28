export const useGetUserInfo = () => {
  if(localStorage.getItem("auth") == null){
    return false;
  }
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );
  return { name, profilePhoto, userID, isAuth };
};
