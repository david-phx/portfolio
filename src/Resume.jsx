import { useEffect } from "react"

const resume = {
  summary: "Resume",
}

function Resume() {
  useEffect(() => {
    document.title = "David Asatrian - Resume";
  }, []);

  return (
    <>
      {resume.summary}
    </>
  );
}

export default Resume
