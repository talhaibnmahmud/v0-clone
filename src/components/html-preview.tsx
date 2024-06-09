"use client";

import { useEffect, useRef } from "react";
import ContentEditable from "react-contenteditable";

import useHtmlStore from "@/stores/html";

export function HtmlPreview({ htmlContent }: { htmlContent: TrustedHTML }) {
  const { html, setHtml } = useHtmlStore();
  const textRef = useRef<string>("");

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setHtml(String(htmlContent));
  }, [htmlContent, setHtml]);

  useEffect(() => {
    console.log(html);
  }, [html]);

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
    setHtml(newContent);
  };

  const handleChange = (evt: React.FormEvent<HTMLDivElement>) => {
    console.log(evt.currentTarget.innerHTML);
    textRef.current = evt.currentTarget.innerHTML;
  };

  const handleBlur = () => {
    console.log(textRef.current);
    setHtml(textRef.current);
  };

  if (!htmlContent) return null;

  return (
    <div>
      <ContentEditable
        onChange={handleChange}
        onBlur={handleBlur}
        html={html}
      />
    </div>
  );

  // return (
  //   <iframe
  //     ref={iframeRef}
  //     onLoad={() => {
  //       const iframeDoc = iframeRef.current?.contentDocument;
  //       if (iframeDoc) {
  //         iframeDoc.designMode = "on"; // Enable content editing inside the iframe
  //         iframeDoc.addEventListener("input", onInput);
  //       }
  //     }}
  //     style={{ width: "100%", height: "500px", border: "none" }}
  //   />
  // );
}
