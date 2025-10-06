import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Inline() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Hello",
    },
    {
      id: 2,
      text: "Ferdy",
    },
  ]);

  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [currentEditedValue, setCurrentEditedValue] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (currentEditedId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentEditedId]);

  const handleEdit = (id, text) => {
    setCurrentEditedId(id);
    setCurrentEditedValue(text);
  };

  const handleBlur = () => {
    if (currentEditedId !== null) {
      saveChanges();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      saveChanges();
    } else if (event.key === "Escape") {
      setCurrentEditedId(null);
    }
  };

  const saveChanges = () => {
    if (currentEditedId !== null) {
      setItems(
        items.map((item) =>
          item.id === currentEditedId
            ? { ...item, text: currentEditedValue }
            : item
        )
      );
      setCurrentEditedId(null);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-6xl font-bold">Inline Editable Input</h1>
      <div className="mt-10 flex flex-col gap-4">
        {items.map((item) =>
          currentEditedId === item.id ? (
            <input
              ref={inputRef}
              value={currentEditedValue}
              onChange={(event) => setCurrentEditedValue(event.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="w-full p-3"
            />
          ) : (
            <div
              onClick={() => handleEdit(item.id, item.text)}
              className="flex justify-between items-center group bg-gray-100 p-3 gap-4 w-full"
            >
              <span>{item.text}</span>
              <Pencil className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )
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
