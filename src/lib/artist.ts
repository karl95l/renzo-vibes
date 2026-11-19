export const releases = [
  { title: 'GAMBian Prince', type: 'EP', date: '20.03.2026', isoDate: '2026-03-20', style: 'prince' },
  { title: 'Gambian Kings & Sons', type: 'Album', date: '31.07.2026', isoDate: '2026-07-31', style: 'kings' },
];
export const tracks = [
  { label: 'LISTEN #01', title: 'MoneyMoney ft. Joel Anjonu Orin', id: 'Mw4mxqRhytU', url: 'https://youtu.be/Mw4mxqRhytU' },
  { label: 'LISTEN #02', title: 'RVP for President ft. Top Striker', id: 'ivYRhk-Cgys', url: 'https://youtu.be/ivYRhk-Cgys' },
].map(t => ({ ...t, thumbnail: `https://i.ytimg.com/vi/${t.id}/hqdefault.jpg` }));
export const channels = { youtube: 'https://www.youtube.com/@RenzoVibes', tiktok: 'https://www.tiktok.com/@renzo_vibez', website: 'https://www.renzovibes.ch/' };
export function artistHead(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
