import { createContext, useState, useEffect } from "react";
const NavigationContext = /*#__PURE__*/createContext();
const NavigationProvider = ({
  children
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);
  const navigate = to => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };
  return /*#__PURE__*/React.createElement(NavigationContext.Provider, {
    value: {
      currentPath,
      navigate
    }
  }, children);
};
export { NavigationProvider };
export default NavigationContext;