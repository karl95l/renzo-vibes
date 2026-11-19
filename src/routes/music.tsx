import { createFileRoute } from '@tanstack/react-router';
import { MusicSection } from '@/components/artist/sections';
import { artistHead } from '@/lib/artist';
export const Route = createFileRoute('/music')({
  head: () => artistHead('Music | Renzo Vibes', 'Explore Gambian Prince and Gambian Kings & Sons, the latest releases from Renzo Vibes.'),
  component: Page,
});
function Page() { return <main><MusicSection standalone /></main>; }
