import getMDXData from "../data/mdx";
import React from "react";
import MDX from '@mdx-js/runtime'

// Provide custom components for markdown elements
const components = {
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  Demo: props => <h1>This is a demo component</h1>
}

// Provide variables that might be referenced by JSX
const scope = {
  some: 'value'
}

const useFocus = () => {
  const [state, setState] = React.useState(null);
  const onFocusEvent = event => {
    setState(true);
  };
  const onBlurEvent = event => {
    setState(false);
  };
  React.useEffect(() => {
    window.addEventListener("focus", onFocusEvent);
    window.addEventListener("blur", onBlurEvent);
    return () => {
      window.removeEventListener("focus", onFocusEvent);
      window.removeEventListener("blur", onBlurEvent);
    };
  });
  return state;
};

const Page = ({ mdxData, etag }) => {
  const focused = useFocus();
  React.useEffect(
    () => {
      if (focused) {
        fetch(window.location, {
          headers: {
            pragma: "no-cache"
          }
        }).then(res => {
          if (res.ok && res.headers.get("x-version") !== etag) {
            window.location.reload();
          }
        });
      }
    },
    [focused]
  );
  
  return <MDX components={components} scope={scope}>{mdxData}</MDX>
}

Page.getInitialProps = async ({ res }) => {
  const mdxData = await getMDXData();
  const etag = require("crypto")
    .createHash("md5")
    .update(JSON.stringify(mdxData))
    .digest("hex");

  if (res) {
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.setHeader("X-version", etag);
  }

  return { mdxData, etag };
};

export default Page