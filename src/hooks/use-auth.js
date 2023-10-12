import { useSelector } from "react-redux";

const useAuth = () => {
  const { name, email, token, id } = useSelector((state) => state.user.user);

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
};

export default useAuth;