export function HtmlPreview({ htmlContent }: { htmlContent: TrustedHTML }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
