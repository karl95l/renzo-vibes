import { createFileRoute } from '@tanstack/react-router';
import { MusicSection } from '@/components/artist/sections';
import { artistHead } from '@/lib/artist';
export const Route = createFileRoute('/music')({
  head: () => artistHead('Music | RenzoVibes', 'Explore Gambian Prince and Gambian Kings & Sons, the latest releases from RenzoVibes.'),
  component: Page,
});
function Page() { return <main><MusicSection standalone /></main>; }
