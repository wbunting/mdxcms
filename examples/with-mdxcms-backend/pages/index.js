import MDX from '@mdx-js/runtime';
import withMDXCMS from 'mdxcms/lib/integrations/next';

const Page = ({ mdx }) => <MDX>{mdx}</MDX>;

export default withMDXCMS('mdxcms')({
  fileId: 'cjw4q6rxn2k1a0b12vq4l0h0m',
})(Page);
