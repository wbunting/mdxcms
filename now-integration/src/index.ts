import { withUiHook, htm, ZeitClient } from '@zeit/integration-utils';
import { Metadata, ViewOptions, Deployment } from './types';
import fetch from 'node-fetch';

export const getQueryStr = (obj: {
  [k: string]: string | number | null | undefined;
}) => {
  const queryStr = Object.keys(obj)
    .filter(k => obj[k])
    .map(k => `${k}=${obj[k]}`)
    .join('&');

  return queryStr ? `?${queryStr}` : '';
};

export async function getDeployments(
  zeitClient: ZeitClient,
  options: { query?: { limit?: number; projectId?: string | null } } = {}
): Promise<Deployment[]> {
  const queryStr = getQueryStr(options.query || {});
  const apiUrl = `/v4/now/deployments${queryStr}`;
  const { deployments } = await zeitClient.fetchAndThrow(apiUrl, {
    method: 'GET',
  });

  return deployments;
}

const getFiles = async (projectId: string) => {
  const result = await fetch(`${process.env.HOST}/api/fileHook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectId,
      pathname: '/hello-world',
    }),
  });

  const data = await result.json();

  console.log(data);

  return data;
};

const dashboard = async (viewOptions: ViewOptions) => {
  const { payload } = viewOptions.options;

  if (!payload.projectId) {
    throw new Error('Cannot get dashboard for project');
  }

  const { files, project } = await getFiles(payload.projectId);

  return htm`
    <Page>
      <H1>Content Repository is configured!</H1>
      <H2>Files</H2>
      <P>${JSON.stringify(files)}</P>
      <H2>Project</H2>
      <P>${JSON.stringify(project)}</P>
      <H2>Edit these files <Link href="https://mdxcms.com/editor">here</Link></H2>
    </Page>
  `;
};

const projectRequiredView = async () => {
  return htm`
    <Page>
			<Notice type="message">Please select a project first 🙏</Notice>
			<ProjectSwitcher />
		</Page>
  `;
};

module.exports = withUiHook(async options => {
  const { projectId } = options.payload;

  if (!projectId) {
    return projectRequiredView();
  }

  const metadata: Metadata = await options.zeitClient.getMetadata();
  const viewOptions: ViewOptions = { options, metadata };

  return dashboard(viewOptions);
});
