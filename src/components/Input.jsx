import { useEffect, useRef } from "react";
const Input = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="input-wrapper">
      <input type="text" placeholder="Search places" ref={inputRef} />
      <span className="shortcut">Ctrl + /</span>
    </div>
  );
};

export default Input;
