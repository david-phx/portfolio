import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation();

  let mediaQuery = window.matchMedia("(max-width: 1024px)");
  const scrollTo = document.getElementById("scrollto");
  const yOffset = -69; // Compensate for stiky navbar
  let topOffset = scrollTo ? scrollTo.getBoundingClientRect().top + window.pageYOffset + yOffset : 0;

  useEffect(() => {
    if (mediaQuery.matches) {
      document.documentElement.scrollTo({
        top: topOffset,
        behavior: "smooth"
      })
    }
  }, [pathname]);

  return null;
}
