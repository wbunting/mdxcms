import fetch from 'isomorphic-unfetch';

const getMDXData = async () => {
 const res = await fetch('http://localhost:3000/api/document')
 const {mdx} = await res.json();

  return mdx;
}

export default getMDXData;