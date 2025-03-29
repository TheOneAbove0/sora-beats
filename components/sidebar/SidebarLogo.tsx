import Link from 'next/link';
import Image from 'next/image';

import { logo } from '@/public/images';
import styles from './SidebarLogo.module.scss'

const SidebarLogo = () => {
    return (
        <Link className={styles.logo} href="/" title="Go to Home">
            <div className={styles.logoContent}>
                <Image
                    src={logo}
                    width={55}
                    height={55}
                    loading='lazy'
                    alt='Sora Beats logo'
                />
                <span className={styles.title}>Sora Beats</span>
            </div>
        </Link>
    );
}

export default SidebarLogo;