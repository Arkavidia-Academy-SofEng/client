import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import AuthService from "../services/authService";

const useOtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter the OTP!");
      return;
    }

    const { fullName, email, phoneNumber, password, role } = location.state || {};

    if (!fullName || !email || !phoneNumber || !password || !role) {
      alert("Registration data is missing. Please restart the registration process.");
      navigate(NavigationRoutes.REGISTER);
      return;
    }

    setLoading(true);
    try {
      await AuthService.register(otp, fullName, email, phoneNumber, password, role);
      alert("Registration successful!");
      navigate(NavigationRoutes.LOGIN);
    } catch (error) {
      alert("OTP verification failed. Please try again.");
      console.error("Error during OTP verification:", error);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (!location.state?.email) {
      alert("Email not found. Please restart the registration process.");
      navigate(NavigationRoutes.REGISTER);
      return;
    }

    setLoading(true);
    try {
      await AuthService.sendOtp(location.state.email);
      alert("OTP resent successfully!");
    } catch (error) {
      alert("Failed to resend OTP.");
      console.error("Error resending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    otp,
    setOtp,
    handleVerifyOtp,
    resendOtp,
    loading,
  };
};

export default useOtpVerification;
