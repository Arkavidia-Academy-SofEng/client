const ProfileSidebar = () => {
  return (
    <div className="hidden shadow-md rounded-lg lg:flex flex-col w-64 p-4" style={{ height: 'calc(100vh - 70px)' }}>
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://picsum.photos/200/300"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <h2 className="mt-2 text-md font-semibold">Alexa Rawles</h2>
        <p className="text-xs text-gray-500">Senior Frontend Developer</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-gray-600">
          <p><strong>143</strong> Views</p>
          <p><strong>28</strong> Searches</p>
          <p><strong>7</strong> Applications</p>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-1">
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">React</span>
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">TypeScript</span>
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Next.js</span>
        </div>
        <button className="mt-3 w-full py-2 text-xs bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
          View Profile
        </button>
      </div>

      {/* Article Section */}
      <div className="mt-4">
        <h3 className="font-semibold text-md">Article Trends</h3>
        <div className="mt-3 space-y-2">
          {[
            { title: "Mastering TypeScript", author: "Alex Lee", time: "Last night", img: "https://picsum.photos/200/300" },
            { title: "Remote Work in 2025", author: "Salma", time: "4h ago", img: "https://picsum.photos/200/300" },
          ].map((article, index) => (
            <div key={index} className="flex space-x-2">
              <img src={article.img} alt="Article" className="w-14 h-14 rounded-md object-cover"/>
              <div>
                <p className="text-xs font-semibold">{article.title}</p>
                <p className="text-xs text-gray-500">{article.author} - {article.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connections Section */}
      <div className="mt-4">
        <h3 className="font-semibold text-md">Connections</h3>
        <div className="mt-3 space-y-2">
          {[
            { name: "Sarah Johnson", job: "UX Designer at CreativeLabs" },
            { name: "Michael Chen", job: "Software Engineer at TechGiant" }
          ].map((person, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold">{person.name}</p>
                <p className="text-xs text-gray-500">{person.job}</p>
              </div>
              <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded-md">Connect</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
