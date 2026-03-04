import { socialLinks } from '../../data/socialLinks';
export default function NavLinks() {
  return (
    <div className="flex flex-row items-center gap-5">
      {socialLinks.map((link, index) => (
        <a href={link.href} key={index} className="h-10 w-10 overflow-hidden" target={link.target}>
          <img src={link.icon} alt={link.title} className="w-full h-full " />
        </a>
      ))}
    </div>
  );
}
