import "./Pill.css";
import { FaCode } from "react-icons/fa";

import { FaDownload } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

const Pill = ({ text, isFilled }: { text: string; isFilled?: boolean }) => {
  return (
    <div className={`pill ${isFilled && "filledBg"} `}>
      {text === "Developer" && <FaCode />}
      {text === "Student" && <PiStudentFill />}
      {/* {text === "Available for Work" && <FaBullhorn />} */}
      {text === "Download CV" && <FaDownload />} {text}
    </div>
  );
};

export default Pill;
