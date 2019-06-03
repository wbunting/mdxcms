import fetch from 'isomorphic-unfetch';

const mdxcms = async ({ pathname, apiToken, repositoryName }) => {
  const url = `https://mdxcms.com/api/file`;
  const body = {
    pathname,
    apiToken,
    repositoryName,
  };
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  });
  const { content } = await result.json();
  // const { content } = JSON.parse(data);

  return content;
};

export default mdxcms;
