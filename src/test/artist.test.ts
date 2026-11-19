import { describe, expect, it } from 'vitest';
import { releases } from '@/lib/artist';
describe('Artist release facts', () => {
  it('GAMBian Prince is an EP released March 20, 2026', () => {
    expect(releases.find(r => r.title === 'GAMBian Prince')).toMatchObject({ type: 'EP', date: '20.03.2026', isoDate: '2026-03-20' });
  });
  it('Gambian Kings & Sons is an album released July 31, 2026', () => {
    expect(releases.find(r => r.title === 'Gambian Kings & Sons')).toMatchObject({ type: 'Album', date: '31.07.2026', isoDate: '2026-07-31' });
  });
});
import { tracks } from '@/lib/artist';
describe('Music previews', () => {
  it('link to the two official YouTube videos in order', () => {
    expect(tracks.map(t => t.url)).toEqual(['https://youtu.be/Mw4mxqRhytU', 'https://youtu.be/ivYRhk-Cgys']);
  });
});
