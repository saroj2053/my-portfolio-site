import "./Pill.css";
import { FaCode } from "react-icons/fa";

import { FaBullhorn, FaDownload } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

const Pill = ({ text }: { text: string }) => {
  return (
    <div className="pill">
      {text === "Developer" && <FaCode />}
      {text === "Student" && <PiStudentFill />}
      {text === "Available for Work" && <FaBullhorn />}
      {text === "Download CV" && <FaDownload />} {text}
    </div>
  );
};

export default Pill;
