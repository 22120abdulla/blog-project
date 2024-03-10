import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare } from 'react-icons/fa';

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between"> 
      <a 
        target="_blank" 
        rel="noreferrer" 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a 
        target="_blank" 
        rel="noreferrer" 
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
      >
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a 
        target="_blank" 
        rel="noreferrer" 
        href={`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
      >
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a 
        target="_blank" 
        rel="noreferrer" 
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)} ${encodeURIComponent(url)}`}
      >
        <FaWhatsappSquare className="text-[#25D366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
