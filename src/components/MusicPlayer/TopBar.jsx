import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="top__bar">
      <p>
        The source code for this project is{' '}
        <Link
          to="https://github.com/Ibaslogic/react-audio-player"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          available on GitHub
        </Link>
      </p>
    </div>
  );
};

export default TopBar;
