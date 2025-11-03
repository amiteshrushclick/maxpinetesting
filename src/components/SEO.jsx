import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  author = "Maxpine Group Homes",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterSite = "@maxpinegroup",
  structuredData,
  breadcrumbs
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update or create link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (link) {
        link.setAttribute('href', href);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      }
    };

    // Basic SEO meta tags
    if (description) {
      updateMetaTag('description', description);
    }
    
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    if (author) {
      updateMetaTag('author', author);
    }

    // Open Graph meta tags
    if (ogTitle || title) {
      updateMetaTag('og:title', ogTitle || title, true);
    }
    
    if (ogDescription || description) {
      updateMetaTag('og:description', ogDescription || description, true);
    }
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }
    
    if (ogUrl || canonical) {
      updateMetaTag('og:url', ogUrl || canonical, true);
    }
    
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Maxpine Group Homes', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:site', twitterSite);
    
    if (ogTitle || title) {
      updateMetaTag('twitter:title', ogTitle || title);
    }
    
    if (ogDescription || description) {
      updateMetaTag('twitter:description', ogDescription || description);
    }
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
    }

    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    // Structured Data
    if (structuredData) {
      // Handle both single objects and arrays
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      dataArray.forEach((data, index) => {
        let script = document.querySelector(`script[type="application/ld+json"][data-schema-index="${index}"]`);
        if (script) {
          script.textContent = JSON.stringify(data);
        } else {
          script = document.createElement('script');
          script.type = 'application/ld+json';
          script.setAttribute('data-schema-index', index);
          script.textContent = JSON.stringify(data);
          document.head.appendChild(script);
        }
      });
    }

    // Breadcrumbs
    if (breadcrumbs) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs
      };
      
      let script = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
      if (script) {
        script.textContent = JSON.stringify(breadcrumbSchema);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-breadcrumb', 'true');
        script.textContent = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
      }
    }

    // Cleanup function
    return () => {
      // Note: We don't remove meta tags on cleanup to avoid flickering
      // The next page will overwrite them anyway
    };
  }, [title, description, keywords, canonical, author, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, twitterSite, structuredData]);

  return null; // This component doesn't render anything
};

export default SEO;
