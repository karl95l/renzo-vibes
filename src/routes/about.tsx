import { createFileRoute } from '@tanstack/react-router';
import { AboutSection } from '@/components/artist/sections';
import { artistHead } from '@/lib/artist';
export const Route = createFileRoute('/about')({
  head: () => artistHead('The Artist | Renzo Vibes', 'Meet Renzo Vibes, the Italian Dancehall artist blending Afrobeats, Amapiano and Hip Hop.'),
  component: Page,
});
function Page() { return <main><AboutSection standalone /></main>; }
