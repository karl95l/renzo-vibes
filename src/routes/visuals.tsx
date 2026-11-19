import { createFileRoute } from '@tanstack/react-router';
import { VisualsSection } from '@/components/artist/sections';
import { artistHead } from '@/lib/artist';
export const Route = createFileRoute('/visuals')({
  head: () => artistHead('Visuals | Renzo Vibes', 'Music in motion. Explore Renzo Vibes videos and the official YouTube channel.'),
  component: Page,
});
function Page() { return <main><VisualsSection standalone /></main>; }
