import { withUiHook, htm, ZeitClient } from '@zeit/integration-utils';
import { Metadata, ViewOptions, Deployment } from './types';
import fetch from 'node-fetch';
var Diff = require('diff');

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

  return data;
};

const getRepository = async (
  projectId: string,
  email: string,
  name: string
) => {
  const result = await fetch(`${process.env.HOST}/api/repoHook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectId,
      email,
      name,
    }),
  });

  const data = await result.json();

  return data;
};

const dashboard = async (viewOptions: ViewOptions) => {
  const { payload } = viewOptions.options;

  if (!payload.projectId) {
    throw new Error('Cannot get dashboard for project');
  }

  const repo = await getRepository(
    payload.projectId,
    payload.user.email,
    // @ts-ignore
    payload.project.name
  );
  if (repo) {
    const { files } = await getFiles(payload.projectId);

    const filesView = htm`
    ${files.map((file: any) => {
      const diff = Diff.diffLines(
        file.content,
        file.previousContent || file.content
      );

      return htm`<Fieldset><FsContent><Box margin="2px">
      <Box 
        borderBottom="1px solid #eaeaea" 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
      ><H2>${file.name}</H2><P>Last updated: ${file.updatedAt}</P></Box>
      <Box>${diff.map((part: any, i: any) => {
        const color = part.added ? '#e6ffed' : part.removed ? '#ffeef0' : '';

        return htm`<Box backgroundColor=${color}>${part.value.split('\n').map(
          (item: any, j: any) =>
            htm`<Box 
            display="flex" 
            justifyContent="flex-start" 
            alignItems="center">
              <Box width="20px"><P>${i +
                j +
                (i > 0 ? diff[i - 1].value.split('\n').length : 0)}</P></Box>
              <Box width="20px"><P>${
                color === '#e6ffed' ? '+' : color === '#ffeef0' ? '-' : ' '
              }</P></Box>
              <Box><P>${item}</P></Box>
            </Box>`
        )}</Box>`;
      })}</Box>
    </Box></FsContent></Fieldset>`;
    })}
  `;

    const editorLink = `https://mdxcms.com/editor?project=${
      // @ts-ignore
      payload.project.name
    }`;

    return htm`
    <Page>
      <H2>CMS Files</H2>
      ${filesView}
      <H2>Edit these files <Link href="${editorLink}">here</Link></H2>
    </Page>
  `;
  } else {
    return htm`<P>No Configuration</P>`;
  }
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
