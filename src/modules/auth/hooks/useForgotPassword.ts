import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import AuthService from "../services/authService";

const useForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"email" | "reset">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await AuthService.sendOtp(email);
      setStep("reset"); // Pindah ke tahap reset password
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
      console.error("Error sending OTP:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await AuthService.changePassword(otp, password);
      alert("Password changed successfully!");
      navigate(NavigationRoutes.LOGIN);
    } catch (err) {
      setError("Failed to reset password. Please check your OTP.");
      console.error("Error during password reset:", err);
    } finally {
      setLoading(false);
    }
  };

  const goToLogin = () => {
    navigate(NavigationRoutes.LOGIN);
  };

  return {
    step,
    email,
    setEmail,
    otp,
    setOtp,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    handleSendOtp,
    handleResetPassword,
    goToLogin,
  };
};

export default useForgotPassword;
