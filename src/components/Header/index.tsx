import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignInButton } from '../SigninButton';
import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/">
            <a href="#/" className={asPath === '/' ? styles.active : ''}>
              Home
            </a>
          </Link>

          <Link href="/posts">
            <a href="#/" className={asPath === '/posts' ? styles.active : ''}>
              Posts
            </a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
