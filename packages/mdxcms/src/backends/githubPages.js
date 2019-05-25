import fetch from 'isomorphic-unfetch';

const githubPages = async ({
  owner,
  repo,
  pathname,
}) => {
  const filePath = pathname === '/' ? '/index' : pathname;
  const url = `https://${owner}.github.io/${repo}${filePath}.mdx`
  const result = await fetch(url, {credentials: 'include'});
  const mdx = await result.text();

  return mdx
}

export default githubPages;