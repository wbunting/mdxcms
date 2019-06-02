import { withUiHook, htm, ZeitClient } from '@zeit/integration-utils';
import { Metadata, ViewOptions, Deployment } from './types';

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

const dashboard = async (viewOptions: ViewOptions) => {
  const { payload, zeitClient } = viewOptions.options;
  const { projectId } = payload;
  const deployments = await getDeployments(zeitClient, {
    query: { limit: 30, projectId },
  });

  const data = deployments.map(({ uid }) => ({ id: uid }));

  return htm`
    <Page>
      ${data.map(
        d => htm`
            <P>${d.id}</P>
          `
      )}
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
