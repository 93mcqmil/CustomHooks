import { useState } from "react";


export function useToggle() {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleState = () => setToggle(toggle => (!toggle))

  return { toggle, toggleState }
}
