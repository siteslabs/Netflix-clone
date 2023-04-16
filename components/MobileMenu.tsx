import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underlinena">
          Home
        </div>
        <div className="px-3 text-center text-white hover:underlinena">
          Series
        </div>
        <div className="px-3 text-center text-white hover:underlinena">
          Films
        </div>
        <div className="px-3 text-center text-white hover:underlinena">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hover:underlinena">
          My List
        </div>
        <div className="px-3 text-center text-white hover:underlinena">
          Browse by languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
