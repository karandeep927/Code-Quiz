import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div
      className={`w-14 h-8 flex items-center  bg-gray-600 dark:bg-thirdBg rounded-full p-1 cursor-pointer transition-all duration-2000 ease-linear ${isDarkMode ? 'justify-end' : 'justify-start'}`}
      onClick={toggleDarkMode}
    >
      <div className="w-6 h-6  bg-primaryBg rounded-full shadow-md transform transition-all duration-2000 ease-in-out"></div>
    </div>
  );
}

export default DarkModeToggle;
