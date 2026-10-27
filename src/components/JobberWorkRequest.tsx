import { useEffect } from "react";

const CONTAINER_ID = "66dbf3d5-47cd-4daa-9115-dd252c7f596d-1712454";
const CSS_HREF = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const SCRIPT_SRC = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/66dbf3d5-47cd-4daa-9115-dd252c7f596d/public/work_request/embedded_work_request_form?form_id=1712454";

export default function JobberWorkRequest() {
  useEffect(() => {
    if (!document.querySelector(`link[data-jobber-work-request="css"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      link.media = "screen";
      link.dataset.jobberWorkRequest = "css";
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = false;
    script.setAttribute("clienthub_id", CONTAINER_ID);
    script.setAttribute("form_url", FORM_URL);
    document.body.appendChild(script);

    return () => {
      script.remove();
      const container = document.getElementById(CONTAINER_ID);
      if (container) container.replaceChildren();
    };
  }, []);

  return (
    <div id="contact-form" className="min-h-[28rem] bg-white text-black">
      <div id={CONTAINER_ID} />
    </div>
  );
}
