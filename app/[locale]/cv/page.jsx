"use client";

import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Sample() {
  const locale = useLocale();
  const [file, setFile] = useState("/cv.pdf");
  const [numPages, setNumPages] = useState();

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (locale === "it") {
      setFile("/cv.pdf");
    } else {
      setFile("/cv-en.pdf");
    }
  }, [locale]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
    >
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center items-center relative"
      >
        <Page
          pageNumber={pageNumber}
          className={"sm:hidden"}
          width={window.innerWidth}
        />
        <Page pageNumber={pageNumber} className={"hidden sm:block"} />
      </Document>
      <div className="fixed bottom-3 left-[50%] rounded-md text-primary translate-x-[-50%] shadow-[0_30px_40px_0_rgba(16,36,94,0.2)] bg-white z-40 transition-opacity duration-[ease-in-out] delay-[0.2s]">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="w-[44px] h-[44px] rounded-md disabled:opacity-50 disabled:pointer-events-none"
        >
          ‹
        </button>
        <span>
          {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </span>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="w-[44px] h-[44px] rounded-md disabled:opacity-50 disabled:pointer-events-none"
        >
          ›
        </button>
      </div>
      <a
        className={`uppercase flex items-center gap-2 bg-accent rounded-md px-3 h-[44px] fixed bottom-3 right-2 text-primary `}
        href={file}
        download="Reguzzi_Fabrizio_CV.pdf"
      >
        <span className="hidden md:flex">Download CV</span>
        <FiDownload className="text-xl md:ml-2" />
      </a>
    </motion.div>
  );
}
