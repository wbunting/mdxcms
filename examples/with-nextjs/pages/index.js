import MDX from '@mdx-js/runtime';
import withMDXCMS from 'mdxcms/lib/integrations/next';

const Page = ({ mdx }) => <MDX>{mdx}</MDX>;

export default withMDXCMS({
  apiToken: process.env.MDXCMS_SECRET,
  repositoryName: 'mdxcms',
  pathname: '/hello-world',
})(Page);
