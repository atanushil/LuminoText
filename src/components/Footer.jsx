import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <p className="text-sm flex items-center">
          &copy; {new Date().getFullYear()} LuminoText 
          <img src="../favicon.png" className='h-6' alt="" />
           All rights reserved.
        </p>
        <p className="text-sm flex items-center gap-2">
          Website developed by <a href="https://github.com/atanushil"  rel='noopener noreferrer' target='_blank' className="underline flex items-center gap-1">
          <img src="https://github.githubassets.com/favicon.ico" className="bg-white flex items-center h-4 rounded-full" alt="github-icon" />
          Atanu Shil</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
