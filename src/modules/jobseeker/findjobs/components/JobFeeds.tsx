import useNavbar from "../../core/hooks/useNavbar";

const JobFeed = () => {

  const {
    searchQuery,
    handleSearch,
  } = useNavbar();
  
  return (
    <div className="md:col-span-2 lg:col-span-2 space-y-6">
      <div className="bg-white md:rounded-lg md:shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="md:hidden relative flex-grow max-w-md mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search title, keyword, company"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 text-sm"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Latest Jobs</h2>
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Most Recent</option>
            <option>Most Relevant</option>
            <option>Highest Salary</option>
          </select>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {/* Job Card 1 */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Senior Frontend Developer</h3>
                  <p className="text-gray-600">TechCorp • San Francisco, CA</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Remote</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$120,000 - $150,000</p>
              <p className="text-gray-500 text-sm">Posted 2 days ago</p>
            </div>
          </div>
          
          {/* Job Card 2 */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>

                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>

                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>


                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>


                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>



                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>



                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>


                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">UX/UI Designer</h3>
                  <p className="text-gray-600">DesignStudio • New York, NY</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">$90,000 - $110,000</p>
              <p className="text-gray-500 text-sm">Posted 1 day ago</p>
            </div>
          </div>
        </div>
        
        <button className="mt-6 w-full py-2 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition-colors">
          Load More Jobs
        </button>
      </div>
    </div>
  );
};

export default JobFeed;