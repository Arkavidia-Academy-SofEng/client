import Button from "../../core/design-system/Button";
import TextField from "../../core/design-system/TextField";
import useOtpVerification from "../hooks/useOtpVerification";

const OtpVerificationPage = () => {
  const { otp, setOtp, handleVerifyOtp, resendOtp } = useOtpVerification();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 justify-center items-center">
      {/* Gambar hanya muncul di desktop */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-6">
        <img 
          src="/src/assets/pc-auth.webp" 
          alt="OTP Verification" 
          className="w-3/4 md:w-2/3 rounded-lg"
        />
      </div>
      
      {/* Form Verifikasi OTP */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">Verify OTP</h2>
          <p className="text-gray-600 mb-6 text-center">Enter the OTP sent to your email</p>
          
          <form onSubmit={handleVerifyOtp} className="w-full">
            <TextField
              label="OTP Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
            />
            
            <Button onClick={handleVerifyOtp} className="w-full bg-blue-700 text-white py-2 rounded mt-4">VERIFY</Button>
          </form>
          
          <p className="mt-4 text-sm text-center">Didn't receive the code? <button onClick={resendOtp} className="text-blue-500">Resend OTP</button></p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
