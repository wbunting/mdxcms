import fetch from 'isomorphic-unfetch';

const mdxcms = async ({ fileId }) => {
  const url = `https://mdxcms.com/api/file/${fileId}`;
  const result = await fetch(url, { credentials: 'include' });
  const data = await result.text();
  const { content } = JSON.parse(data);

  return content;
};

export default mdxcms;
