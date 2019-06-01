// forked from https://github.com/zeit/next-site/blob/master/www/components/navbar.js @c95a37b8a91161a7e152f4935d3850fd13d7c302

import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import { ApolloConsumer } from 'react-apollo';
import cookie from 'cookie';
import redirect from '../lib/redirect';

import MDXCMSLogo from './Logo';
import { Button, Box } from 'rebass';
import Container from './Container';

import GitHubLogo from './Icons/Github';

function Navbar({ className, hideLogo, route, loggedIn, isMobile }) {
  const signout = apolloClient => () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1, // Expire the cookie immediately
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/login');
    });
  };

  return (
    <ApolloConsumer>
      {client => (
        <Container className={className} center>
          <nav className="f-reset">
            {!hideLogo && (
              <div className="logo">
                <Link href="/" prefetch>
                  <a aria-label="MDXCMS">
                    <MDXCMSLogo />
                  </a>
                </Link>
              </div>
            )}
            <div className="links">
              <a
                href="/docs"
                className={classNames('mute', {
                  selected: route.startsWith('/docs'),
                })}
                title="Documentation"
              >
                Docs
              </a>
              <div className="icons">
                <Link href="https://github.com/wbunting/mdxcms">
                  <a
                    aria-label="MDXCMS on GitHub"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GitHubLogo />
                  </a>
                </Link>
              </div>
            </div>
            <div className="links">
              {!loggedIn ? (
                <>
                  <Link href="/login" prefetch>
                    <a
                      className={classNames('mute', {
                        selected: route.startsWith('/login'),
                      })}
                      title="Login"
                    >
                      Login
                    </a>
                  </Link>
                  <Link href="/signup" prefetch>
                    <Button
                      bg="white"
                      border="1px solid #ffffff"
                      borderColor="black"
                      borderRadius={4}
                      px={2}
                      py={0.5}
                    >
                      <a title="Get Started" className="button">
                        Get Started
                      </a>
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Box mx={3}>
                    <Link href="/editor" prefetch>
                      <Button
                        bg="white"
                        border="1px solid #ffffff"
                        borderColor="black"
                        borderRadius={4}
                        px={2}
                        py={0.5}
                      >
                        <a title="Editor" className="button">
                          Editor
                        </a>
                      </Button>
                    </Link>
                  </Box>
                  <Button
                    bg="white"
                    border="1px solid #ffffff"
                    borderColor="black"
                    borderRadius={4}
                    px={2}
                    py={0.5}
                    onClick={signout(client)}
                  >
                    <a title="Editor" className="button">
                      Sign Out
                    </a>
                  </Button>
                </>
              )}
            </div>
          </nav>
          <style jsx>
            {`
              nav {
                position: relative;
                flex: 1;
                height: 48px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              nav .links {
                display: flex;
                align-items: center;
                z-index: 1;
                pointer-events: auto;
              }
              nav .links a {
                display: inline-block;
                // enlarge the clickable area
                padding: 5px;
                margin-left: -5px;
                margin-right: 2rem;
                text-decoration: none;
                transition: color 0.2s ease;
              }
              nav .links a.button {
                margin-right: 0;
                cursor: pointer;
              }
              nav .links a:hover {
                color: #111;
              }
              nav .links a.selected {
                color: #0070f3;
                font-weight: 600;
              }
              nav .logo {
                position: absolute;
                width: 100%;
                font-size: 0;
                text-align: center;
                overflow: hidden;
                transition: all 0.2s ease;
                // visibility: hidden;
                pointer-events: none;
                // transform: translate3d(0, 30%, 0);
                opacity: 0;
              }
              :global(.active) nav .logo,
              :global(.show-logo) nav .logo {
                pointer-events: auto;
                // transform: translate3d(0, 0, 0);
                opacity: 1;
              }
              nav .logo a {
                display: inline-block;
              }
              nav .links .icons {
                display: flex;
                align-items: center;
              }
              nav .links .icons a {
                position: relative;
                line-height: 1;
                margin-right: 1rem;
              }
              nav .links .icons a .badge {
                position: absolute;
                display: inline-block;
                right: 0px;
                bottom: 4px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: #2bdb66;
                pointer-events: none;
              }
              nav .links .icons a.no-margin {
                margin-right: 0;
              }
              // CSS only media query for mobile + SSR
              @media screen and (max-width: 640px) {
                .logo {
                  display: none;
                }
              }
            `}
          </style>
        </Container>
      )}
    </ApolloConsumer>
  );
}

export default withRouter(({ router, hideLogo = false, loggedIn }) => {
  const { route } = router;

  const hideLogoDesktop =
    typeof hideLogo.desktop === 'boolean'
      ? hideLogo.desktop
      : typeof hideLogo === 'boolean'
      ? hideLogo
      : false;
  const hideLogoMobile =
    typeof hideLogo.mobile === 'boolean'
      ? hideLogo.mobile
      : typeof hideLogo === 'boolean'
      ? hideLogo
      : false;

  return (
    <>
      <Navbar
        className="navbar-desktop"
        route={route}
        hideLogo={hideLogoDesktop}
        isMobile={false}
        loggedIn={loggedIn}
      />
      {/* <Navbar
        className="navbar-mobile"
        route={route}
        hideLogo={hideLogoMobile}
        isMobile
        loggedIn={loggedIn}
      /> */}
      {/* <style jsx global>
        {`
          @media screen and (max-width: 640px) {
            .navbar-desktop {
              display: none;
            }
          }
          @media screen and (min-width: 641px) {
            .navbar-mobile {
              display: none;
            }
          }
        `}
      </style> */}
    </>
  );
});
