import { useEffect, useRef } from "react";
const Input = ({ input, setInput }) => {
  const inputRef = useRef(null);

  function handleChange(value) {
    setInput(value);
  }

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
      <input
        type="text"
        placeholder="Search places"
        ref={inputRef}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span className="shortcut">Ctrl + /</span>
    </div>
  );
};

export default Input;
