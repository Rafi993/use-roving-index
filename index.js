import { useCallback, useState, useEffect } from "react";

function useRovingFocus(listSize) {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [size, setSize] = useState(listSize);

  useEffect(() => {
    setSize(listSize);
  }, [listSize]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRovingFocus;
