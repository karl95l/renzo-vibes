import { createFileRoute } from '@tanstack/react-router';
import { MerchSection } from '@/components/artist/sections';
import { artistHead } from '@/lib/artist';
export const Route = createFileRoute('/merch')({
  head: () => artistHead('Wear the Vibe | RenzoVibes', 'Something special is coming. Discover the upcoming RenzoVibes merchandise.'),
  component: Page,
});
function Page() { return <main><MerchSection standalone /></main>; }
