import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the click is outside the referenced element
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Call the callback function if the click is outside
      callback(event);
    };

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup the event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Dependencies for the effect
};