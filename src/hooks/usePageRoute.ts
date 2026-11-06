import { useEffect, useState } from 'react';
import type { StoreSlug } from '@/data/stores';

export const PAGES = ['home', 'knockdown', 'kiosk', 'petvilla'] as const;
export type PageId = (typeof PAGES)[number];

export function isStorePage(page: PageId): page is StoreSlug {
  return page !== 'home';
}

function readPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '');
  return (PAGES as readonly string[]).includes(hash) ? (hash as PageId) : 'home';
}

export function usePageRoute() {
  const [page, setPage] = useState<PageId>(readPageFromHash);

  useEffect(() => {
    const handleChange = () => setPage(readPageFromHash());
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const navigate = (next: PageId) => {
    window.location.hash = next;
  };

  return { page, navigate };
}
