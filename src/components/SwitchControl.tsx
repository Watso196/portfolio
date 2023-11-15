import React from "react";

interface Props {
  label: string;
  id: string;
  onChange: () => void;
}

const SwitchControl = ({ label, id, onChange }: Props) => {
  const [isOn, setIsOn] = React.useState(false);

  const onClick = () => {
    onChange();
    setIsOn(!isOn);
    console.log("switch state", isOn);
  };

  return (
    <div className="switch">
      <label htmlFor={id}>{label}</label>
      <button
        type="button"
        className={"switch" + (isOn ? " on" : "")}
        id={id}
        role="switch"
        aria-checked={isOn}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="36">
          <rect
            className="container"
            x="1"
            y="1"
            width="34"
            height="18"
            rx="4"
            fill="rgb(255, 255, 255)"
          ></rect>
          <rect id="off-state" x="4" y="4" width="12" height="12" rx="4"></rect>
          <rect id="on-state" x="20" y="4" width="12" height="12" rx="4"></rect>
        </svg>
      </button>
    </div>
  );
};

export default SwitchControl;
