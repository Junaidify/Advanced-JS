import { useCallback, useState } from "react"


export const useHover = () => {
    const [onMouse, setOnMouse] = useState(false);

    const onMouseEnter = useCallback(() => setOnMouse(true), []);
    const onMouseLeave = useCallback(() => setOnMouse(false), []);

    return  {onMouseEnter, onMouseLeave, onMouse}
}