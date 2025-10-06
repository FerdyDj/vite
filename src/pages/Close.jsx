import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Close() {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const toggleDropDown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-6xl font-bold">Close Dropdown On Outside Click</h1>
      <div className="relative mt-10" ref={dropDownRef}>
        <button
          onClick={toggleDropDown}
          className="w-96 flex bg-slate-200 px-3 py-2 rounded-lg justify-between cursor-pointer"
        >
          Select an option
          <ChevronDown className={isOpen ? "rotate-180" : ""} />
        </button>
        {isOpen && (
          <div className="absolute w-full rounded-md border z-10 shadow-lg bg-slate-200">
            <div className="py-1">
              {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                <button
                  key={index}
                  onClick={toggleDropDown}
                  className="block w-full px-4 py-2 text-left text-sm cursor-pointer hover:bg-slate-100"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link to="/">
        <button className="bg-gray-700 text-white rounded-lg py-2 px-4 mt-5 cursor-pointer hover:shadow-xl hover:bg-black hover:font-semibold transition-all duration-200">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
