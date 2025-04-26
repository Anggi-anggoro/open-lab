import React from 'react';
import Link from 'next/link';

const WonderFooter = ({ 
  className = "",
  showContact = true,
  showSocial = false 
}) => {
  return (
    <footer className={`bg-primary/5 py-8 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-2xl font-bold text-primary">
          🌟 Come build a world of wonder with us.
        </p>
        <p className="text-xl text-primary mt-2">
          Open Lab — Where Science Comes Alive.
        </p>
        
        {showContact && (
          <div className="mt-6">
            <Link 
              href="/careers" 
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        )}
        
        {showSocial && (
          <div className="flex justify-center space-x-4 mt-6">
            {/* Add your social media icons here */}
          </div>
        )}
        
        <div className="mt-8 text-sm text-primary/70">
          © {new Date().getFullYear()} Open Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default WonderFooter;