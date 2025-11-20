import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on an inquiry post detail page
    const isInquiryDetail = location.pathname === '/inquiry' && location.search.includes('id=');

    // Get or create meta robots tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }

    // Set appropriate robots meta tag
    if (isInquiryDetail) {
      metaRobots.content = 'noindex, nofollow';
    } else {
      metaRobots.content = 'index, follow';
    }
  }, [location]);

  return null;
};

export default SEOHead;
