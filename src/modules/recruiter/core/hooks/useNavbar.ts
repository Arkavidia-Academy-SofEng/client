// hooks/useNavbar.ts
import { useState, useEffect } from 'react';

interface UseNavbarProps {
  breakpoint?: number;
}

export const useNavbar = ({ breakpoint = 1024 }: UseNavbarProps = {}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to determine if mobile view is active
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
      
      // Auto-close menu when resizing to desktop
      if (window.innerWidth >= breakpoint) {
        setIsMenuOpen(false);
      }
    };

    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return {
    searchQuery,
    handleSearch,
    isMenuOpen,
    isMobile,
    toggleMenu
  };
};

export default useNavbar;