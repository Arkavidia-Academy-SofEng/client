import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import AuthService from "../services/authService";

const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await AuthService.login(email, password);
      if (response) {
        navigate(NavigationRoutes.FEEDS);
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error("Error during login process:", error);
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigate(NavigationRoutes.REGISTER);
  };

  const goToForgotPassword = () => {
    navigate(NavigationRoutes.FORGOT_PASSWORD);
  };

  return { email, setEmail, password, setPassword, handleLogin, goToRegister, goToForgotPassword, loading };
};

export default useLogin;
