const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const getMDXData = async () => {
  await sleep(1000);

  const mdx = `
# Hello, world!
 
<Demo />
`

  return mdx;
}

export default getMDXData;