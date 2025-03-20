const Premium = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-6">Premium</h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 bg-white shadow-lg flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Free</h3>
            <p className="text-gray-800 font-medium">IDR XXX</p>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>• Create & Edit Profile</li>
              <li>• Apply for Jobs</li>
              <li>• Job Alerts & Notifications</li>
            </ul>
          </div>
          <div className="mt-5">
            <button className="w-full bg-gray-300 text-gray-600 py-3 rounded-full font-semibold cursor-not-allowed">
              MAYBE LATER
            </button>
            <p className="text-blue-500 text-sm mt-2 text-center cursor-pointer">Terms apply</p>
          </div>
        </div>

        {/* Platinum Plan */}
        <div className="border rounded-lg p-6 bg-white shadow-lg flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Platinum</h3>
            <p className="text-gray-800 font-medium">IDR XXX</p>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>• Priority Applications – Be seen first by recruiters</li>
              <li>• Job Insights – See how many applied & required skills</li>
              <li>• AI Resume Review – Get smart CV improvements</li>
              <li>• Incognito Mode – Browse jobs without being seen</li>
              <li>• Unlimited Messaging – Connect with anyone, including recruiters</li>
              <li>• Exclusive Webinars & Courses – Gain career-boosting knowledge</li>
            </ul>
          </div>
          <div className="mt-5">
            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
              UPGRADE NOW
            </button>
            <p className="text-blue-500 text-sm mt-2 text-center cursor-pointer">Terms apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
