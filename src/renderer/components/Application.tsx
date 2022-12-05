import React, { useEffect, useState } from 'react';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [versions, setVersions] = useState<Record<string, string>>({});

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }

    // Apply verisons
    const app = document.getElementById('app');
    const versions = JSON.parse(app.getAttribute('data-versions'));
    setVersions(versions);
  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div id='HSS'>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <button className='bg-red-800 w-10 h-10' onClick={toggleTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  );
};

export default Application;
