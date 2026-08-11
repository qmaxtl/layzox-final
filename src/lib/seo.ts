import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

export function usePageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);
}
