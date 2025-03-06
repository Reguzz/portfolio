import { Button } from "../components/ui";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const CvButton = () => {
  return (
    <Button
      variant="outline"
      size="lg"
      className={`uppercase flex items-center gap-2`}
    >
      <Link to={`cv`} target="_blank" className="flex">
        <span>Download CV</span>
        <FiDownload className="text-xl ml-2" />
      </Link>
    </Button>
  );
};

export default CvButton;
