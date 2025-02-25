"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useLocale } from "use-intl";

const CvButton = () => {
  const locale = useLocale();
  const openCV = () => {
    window.open(`/${locale}/cv`, "_blank");
  };
  return (
    <Button
      variant="outline"
      size="lg"
      className={`uppercase flex items-center gap-2`}
      onClick={openCV}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl ml-2" />
    </Button>
  );
};

export default CvButton;
