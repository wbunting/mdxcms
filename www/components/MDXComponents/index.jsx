import { H1, H2, H3, H4, H5 } from './text/headings';
import { Blockquote } from './text/quotes';
import { InlineCode, Code } from './text/code';
import { GenericLink } from './text/link';
import Heading from './heading';

const DocH2 = ({ children, id }) => (
  <div>
    <Heading lean id={id}>
      <H2>{children}</H2>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
);

const DocH3 = ({ children, id }) => (
  <div>
    <Heading lean id={id}>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      div {
        margin: 2rem 0 0 0;
      }
    `}</style>
  </div>
);

const DocH4 = ({ children, id }) => (
  <div>
    <Heading lean id={id}>
      <H4>{children}</H4>
    </Heading>
  </div>
);

const Details = ({ children }) => {
  return (
    <details>
      {children}
      <style jsx>
        {`
          margin: 1rem 0;
          padding: 0 0.5rem;
          background: #f9f9f9;
          overflow: hidden;
        `}
      </style>
    </details>
  );
};

const Summary = ({ children }) => {
  return (
    <summary>
      {children}
      <style jsx>{`
        summary {
          cursor: pointer;
          outline: none;
          font-weight: 500;
        }
        summary:hover {
          opacity: 0.8;
        }
      `}</style>
    </summary>
  );
};

export const MDXComponents = {
  h1: H1,
  h2: DocH2,
  h3: DocH3,
  h4: DocH4,
  h5: H5,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink,
  details: Details,
  summary: Summary
};

export default MDXComponents;