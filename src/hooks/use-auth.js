import { useSelector } from "react-redux";

const useAuth = () => {
  const { name, email, token, id } = useSelector((state) => state.user.user);
  console.log(name, email, token, id );

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
};

export default useAuth;