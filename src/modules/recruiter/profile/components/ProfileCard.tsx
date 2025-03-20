const ProfileCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full mx-auto">
      <div className="relative">
        <img
          src="https://picsum.photos/200/300"
          alt="Cover"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-6 transform translate-y-1/2">
          <img
            src="https://picsum.photos/200/300"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="mt-14 px-6 pb-6 text-left">
        <h2 className="text-2xl font-bold">Alexa Rawles</h2>
        <p className="text-gray-600 text-lg">Senior Frontend Developer</p>
        <div className="flex flex-col gap-1 mt-2 text-gray-500 text-sm">
          <span>📍 San Francisco, CA</span>
          <span>✉️ alexa.rowes@email.com</span>
        </div>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
