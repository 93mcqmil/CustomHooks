import { useToggle } from "../hooks/useToogle";
import "./ToggleButton.css";

export default function ToogleButton() {
  const { toggle, toggleState } = useToggle();
  return (
    <>
      <button
        onClick={toggleState}
        className={`toggle-button ${toggle ? "on" : "off"}`}
      >
        {toggle ? "on" : "off"}
      </button>
    </>
  );
}
