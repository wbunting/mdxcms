export default ({ invert = false }) => (
  <svg
    viewBox="0 0 226 200"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="18px"
  >
    <defs>
      <linearGradient
        x1="196.572434%"
        y1="228.815483%"
        x2="50%"
        y2="50%"
        id="l1"
      >
        <stop offset="0%" stopColor="#000" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
      <linearGradient
        x1="196.572434%"
        y1="228.815483%"
        x2="50%"
        y2="50%"
        id="l2"
      >
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-141.000000, -156.000000)"
        fill={invert ? 'url(#l1)' : 'url(#l2)'}
      >
        <polygon points="254 156.459299 367 356 141 356 " />
      </g>
    </g>
  </svg>
);
