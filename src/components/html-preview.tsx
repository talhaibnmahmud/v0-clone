"use client";

import { useEffect, useState } from "react";

export function HtmlPreview({ htmlContent }: { htmlContent: TrustedHTML }) {
  const [html, setHtml] = useState(htmlContent);
  useEffect(() => {
    console.log(htmlContent);
  }, [htmlContent]);

  if (!htmlContent) return null;

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    setHtml(e.currentTarget.innerHTML);
  };

  return (
    <div
      contentEditable
      dangerouslySetInnerHTML={{ __html: html }}
      onInput={onInput}
    />
  );
}
