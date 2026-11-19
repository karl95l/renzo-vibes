import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUp, ArrowUpRight, Menu, X, Youtube, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { channels } from '@/lib/artist';
import logo from '@/assets/renzovibes-logo.png.asset.json';
const links = [{to:'/music',label:'MUSIC'},{to:'/visuals',label:'VISUALS'},{to:'/about',label:'ABOUT'},{to:'/merch',label:'MERCH'},{to:'/connect',label:'CONNECT'}] as const;
function Logo({ size = 46 }: { size?: number }) { return <img src={logo.url} alt="RenzoVibes logo" width={size} height={size} className="brand-logo" />; }
export function ArtistHeader() {
  const [open,setOpen] = useState(false);
  return <header className="artist-header"><Link to="/" className="wordmark" onClick={()=>setOpen(false)} aria-label="RenzoVibes home"><Logo />RENZOVIBES</Link><nav className={open ? 'main-navigation is-open' : 'main-navigation'} aria-label="Main navigation">{links.map(link=><Button asChild variant="navigation" key={link.to}><Link to={link.to} activeProps={{className:'nav-active'}} onClick={()=>setOpen(false)}>{link.label}</Link></Button>)}</nav><div className="header-social"><a href={channels.tiktok} target="_blank" rel="noopener noreferrer" aria-label="RenzoVibes on TikTok"><Music2 /></a><a href={channels.youtube} target="_blank" rel="noopener noreferrer" aria-label="RenzoVibes on YouTube"><Youtube /></a><span className="header-rule"/><span className="live-label"><i/> FEEL THE VIBE</span></div><Button variant="navigation" className="mobile-menu" size="icon" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X/>:<Menu/>}</Button></header>;
}
export function ArtistFooter() {
  return <footer className="artist-footer"><div className="footer-top"><Link to="/" className="wordmark"><Logo size={64} />RENZOVIBES</Link><p>Feel the rhythm. Live the vibe.</p><Button variant="navigation" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>BACK TO TOP <ArrowUp /></Button></div><div className="footer-bottom"><p>© 2026 RenzoVibes. All rights reserved.</p><div><a href={channels.tiktok} target="_blank" rel="noopener noreferrer">TIKTOK <ArrowUpRight/></a><a href={channels.youtube} target="_blank" rel="noopener noreferrer">YOUTUBE <ArrowUpRight/></a><a href={channels.website} target="_blank" rel="noopener noreferrer">OFFICIAL WEBSITE <ArrowUpRight/></a></div><span>FROM ITALY. TO THE WORLD.</span></div></footer>;
}
