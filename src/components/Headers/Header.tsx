import ToggledNav from "./ToggledNav.tsx";
import Logo from '../Logo/Logo.tsx'
import { useState, useEffect } from "react";
import IconHeader from "./IconHeader.tsx";

const Header = () => {
  const [isToggled, setIsToggled] = useState(() => window.innerWidth <= 565);
  const handleResize = () => {
    setIsToggled(window.innerWidth <= 565);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    <div className="header w-full h-20 p-4 flex items-center bg-DarkBlueG text-white">
      <div className="containerNav w-full flex flex-row items-center justify-between">
        {isToggled ? (
          <>
            <ToggledNav/>
            <Logo />
            <IconHeader value={isToggled} />
          </>
        ) : (
          <>
            <ToggledNav/>
            <Logo />
            <IconHeader value={isToggled} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
