import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import AuthService from "../services/authService";

const useRegister = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("job_seeker");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      alert("You must agree to the terms before registering.");
      return;
    }

    setLoading(true);
    try {
      await AuthService.sendOtp(email);
      navigate(NavigationRoutes.OTP_VERIFICATION, { state: { fullName, email, phoneNumber, password, role } });
    } catch (error) {
      alert("Failed to request OTP. Please try again.");
      console.error("Error during registration process:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    role,
    setRole,
    agreeTerms,
    setAgreeTerms,
    handleRegister,
    loading,
  };
};

export default useRegister;
