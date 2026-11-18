import { createFileRoute } from '@tanstack/react-router';
import { SocialSection } from '@/components/artist/sections';
import { artistHead } from '@/lib/artist';
export const Route = createFileRoute('/connect')({
  head: () => artistHead('Follow the Journey | RenzoVibes', 'Stay connected with RenzoVibes on TikTok, YouTube and the official website.'),
  component: Page,
});
function Page() { return <main><SocialSection standalone /></main>; }
