"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useHtmlStore from "@/stores/html";

export function CodeViewer() {
  const html = useHtmlStore((state) => state.html);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>View code</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your current
            prompt and settings into your application.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="rounded-md bg-black p-6">
            <pre className="max-w-full max-h-96 overflow-auto p-2 rounded whitespace-pre-wrap break-all">
              <code className="grid gap-1 text-sm text-muted-foreground max-w-7xl">
                <SyntaxHighlighter
                  language="javascript"
                  style={atomDark}
                  showLineNumbers
                >
                  {html}
                </SyntaxHighlighter>
              </code>
            </pre>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Your API Key can be found here. You should use environment
              variables or a secret management tool to expose your key to your
              applications.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
