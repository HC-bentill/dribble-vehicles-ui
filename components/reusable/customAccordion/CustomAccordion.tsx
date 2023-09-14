import ChevdownIcon from "@/assets/icons/ChevdownIcon";
import ChevupIcon from "@/assets/icons/ChevupIcon";
import React, {useState} from "react";

type Props = {
  title: string;
  titleIcon?: string;
  children: React.ReactNode;
};

const CustomAccordion = ({title, titleIcon, children}: Props) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleAccordionToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="accordion-header" onClick={handleAccordionToggle}>
        <div className="accordion-title-header">
          <span className="accordion-titleIcon">{titleIcon}</span>
          <p className="accordion-title">{title}</p>
        </div>
        {toggle ? <ChevupIcon width={"16px"} height={"16px"} fill={"white"} /> : <ChevdownIcon width={"16px"} height={"16px"} fill={"white"} />}
      </div>

      {toggle && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default CustomAccordion;
