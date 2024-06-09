"use client";

import { useEffect, useRef, useState } from "react";

export function HtmlPreview({ htmlContent }: { htmlContent: TrustedHTML }) {
  const [html, setHtml] = useState(String(htmlContent) as unknown as string);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    console.log(htmlContent);
  }, [htmlContent]);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframeDoc = iframeRef.current.contentDocument;
    if (!iframeDoc) return;

    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();
    iframeDoc.designMode = "on";
  }, [html]);
  const onInput = () => {
    if (!iframeRef.current) return;

    const iframeDoc = iframeRef.current.contentDocument;
    if (!iframeDoc) return;

    const newContent = iframeDoc.documentElement.outerHTML;
    console.log(newContent);

    setHtml(newContent);
  };

  if (!htmlContent) return null;

  return (
    <iframe
      ref={iframeRef}
      onLoad={() => {
        const iframeDoc = iframeRef.current?.contentDocument;
        if (iframeDoc) {
          iframeDoc.designMode = "on"; // Enable content editing inside the iframe
          iframeDoc.addEventListener("input", onInput);
        }
      }}
      style={{ width: "100%", height: "500px", border: "none" }}
    />
  );
}
