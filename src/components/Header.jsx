import { useState } from 'react';

const Header = () => {

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="bg-gray-100 text-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        
        <img src="/logo.png" alt="Logo" className="h-8" />

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl focus:outline-none absolute right-4" 
        >
          {isMenuOpen ? '×' : '≡'}
        </button>

        
        <nav className="w-full lg:w-auto">
        
          {isMenuOpen && (
            <div className="absolute left-0 top-full w-full bg-white shadow-md z-10">
              <ul className="space-y-4 py-4 px-6">
                
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#search" className="hover:text-gray-400">Search</a></li>
                <li><a href="#dashboard" className="hover:text-gray-400">Dashboard</a></li>

                
                <li className="relative">
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center hover:text-gray-400 focus:outline-none"
                  >
                    User
                    <span className={`ml-2 transform ${isUserDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {isUserDropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-gray-800 text-white w-40 rounded-md shadow-lg">
                      <li><a href="#profile" className="block px-4 py-2 hover:bg-gray-700">Profile</a></li>
                      <li><a href="#settings" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
                      <li><a href="#logout" className="block px-4 py-2 hover:bg-gray-700">Logout</a></li>
                    </ul>
                  )}
                </li>

              
                <li className="relative">
                  <button
                    onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                    className="flex items-center hover:text-gray-400 focus:outline-none"
                  >
                    Categories
                    <span className={`ml-2 transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {isCategoriesDropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-gray-800 text-white w-40 rounded-md shadow-lg">
                      <li><a href="#category1" className="block px-4 py-2 hover:bg-gray-700">Category 1</a></li>
                      <li><a href="#category2" className="block px-4 py-2 hover:bg-gray-700">Category 2</a></li>
                      <li><a href="#category3" className="block px-4 py-2 hover:bg-gray-700">Category 3</a></li>
                    </ul>
                  )}
                </li>

                
                <li><a href="#logout" className="hover:text-gray-400">Logout</a></li>
              </ul>
            </div>
          )}

      
          <ul className="lg:flex hidden space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#search" className="hover:text-gray-400">Search</a></li>
            <li><a href="#dashboard" className="hover:text-gray-400">Dashboard</a></li>


            <li className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center hover:text-gray-400 focus:outline-none"
              >
                User
                <span className={`ml-2 transform ${isUserDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isUserDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-800 text-white w-40 rounded-md shadow-lg">
                  <li><a href="#profile" className="block px-4 py-2 hover:bg-gray-700">Profile</a></li>
                  <li><a href="#settings" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
                  <li><a href="#logout" className="block px-4 py-2 hover:bg-gray-700">Logout</a></li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                className="flex items-center hover:text-gray-400 focus:outline-none"
              >
                Categories
                <span className={`ml-2 transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isCategoriesDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-800 text-white w-40 rounded-md shadow-lg">
                  <li><a href="#category1" className="block px-4 py-2 hover:bg-gray-700">Category 1</a></li>
                  <li><a href="#category2" className="block px-4 py-2 hover:bg-gray-700">Category 2</a></li>
                  <li><a href="#category3" className="block px-4 py-2 hover:bg-gray-700">Category 3</a></li>
                </ul>
              )}
            </li>
            <li><a href="#logout" className="hover:text-gray-400">Logout</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
