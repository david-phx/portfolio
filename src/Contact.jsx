import { useEffect } from "react"

function Contact() {
  useEffect(() => {
    document.title = "David Asatrian - Contact";
  }, []);

  return (
    <>
      Contact
    </>
  );
}

export default Contact
