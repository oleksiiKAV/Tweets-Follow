import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Link, Paragraph } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { FaHome } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';

function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/tweets"><ImTwitter/>Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer>
        <Paragraph>
          Created by{' '}
          <a
            href="https://www.linkedin.com/in/oleksii-kormilets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Oleksii Kormilets</b>
          </a>
        </Paragraph>
      </Footer>
      <Toaster />
    </>
  );
}

export default SharedLayout;
