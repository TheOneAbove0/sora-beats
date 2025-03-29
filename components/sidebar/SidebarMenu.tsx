import MenuList from './menu/MenuList';
import styles from './SidebarMenu.module.scss'
import { SidebarLinks } from '@/constants/sidebar-links';

const SidebarMenu = () => {
    return (
        <ul className={styles.menuList}>
            {SidebarLinks.map(link => (
                <li key={link.id}>
                    <MenuList title={link.title} links={link.links} />
                </li>
            ))}
        </ul>
    );
}

export default SidebarMenu;