import { BiHome, BiMovie } from 'react-icons/bi';
import { AppBarHeader, AppBarNav, AppBarNavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: BiHome },
  { href: 'movies', text: 'Movies', icon: BiMovie },
];

export const AppBar = () => {
  return (
    <AppBarHeader>
      <AppBarNav>
        {navItems.map(({ href, text, icon: Icon }) => (
          <AppBarNavItem key={href} to={href}>
            <Icon />
            {text}
          </AppBarNavItem>
        ))}
      </AppBarNav>
    </AppBarHeader>
  );
};
