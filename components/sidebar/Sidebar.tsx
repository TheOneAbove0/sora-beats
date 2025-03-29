import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';

import styles from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar} aria-label="Sidebar">
            <SidebarLogo />
            <nav aria-label="Main menu">
                <SidebarMenu />
            </nav>
        </aside>
    );
}

export default Sidebar;