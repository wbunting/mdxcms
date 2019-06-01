import React from 'react';
import { withRouter } from 'next/router';
import cookie from 'cookie';
import redirect from '../lib/redirect';

const Page = ({
  router: {
    query: { code },
  },
}) => {
  React.useEffect(() => {
    const getAccessToken = async () => {
      const res = await fetch(`/api/oauth?code=${code}`);
      const oauthUser = await res.text();
      debugger;
      const { token } = JSON.parse(oauthUser);
      // Store the token in cookie
      document.cookie = cookie.serialize('token', token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
      redirect({}, '/editor');
    };
    getAccessToken();
  }, [code]);

  return <span>Authenticating...</span>;
};

export default withRouter(Page);
