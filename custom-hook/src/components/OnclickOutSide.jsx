import { useOnClickOutside } from "../hooks/useOnClickOutside";

const OnclickOutSide = () => {
  const componentClass = "dropdown";
  const [state, setState] = useOnClickOutside(componentClass);

  return (
    <>
      <div className={componentClass}>
        <div>Click to activate Dropdown</div>
        {state && <div>DropDown is activated</div>}
      </div>

      <button onClick={() => setState(true)}>Activate</button>
    </>
  );
};

export default OnclickOutSide;
