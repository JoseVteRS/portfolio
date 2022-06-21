

type Props = {};

const NodeIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={4.69}
          y1={75.85}
          x2={95.31}
          y2={75.85}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.09} stopColor="#6abf4b" />
          <stop offset={0.29} stopColor="#63b649" />
          <stop offset={0.6} stopColor="#529f44" />
          <stop offset={0.86} stopColor="#3f873f" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={4.69}
          y1={87.55}
          x2={95.31}
          y2={87.55}
          xlinkHref="#a"
        />
        <linearGradient
          id="d"
          x1={108.52}
          y1={15.34}
          x2={52.62}
          y2={129.36}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#3f873f" />
          <stop offset={0.33} stopColor="#3f8b3d" />
          <stop offset={0.64} stopColor="#3e9637" />
          <stop offset={0.93} stopColor="#3da92e" />
          <stop offset={1} stopColor="#3dae2b" />
        </linearGradient>
        <clipPath id="b">
          <path
            d="M52.37.63a4.75 4.75 0 0 0-4.73 0L8.44 23.25a4.75 4.75 0 0 0-2.37 4.1v45.28a4.75 4.75 0 0 0 2.37 4.1l39.2 22.64a4.75 4.75 0 0 0 4.73 0l39.19-22.64a4.75 4.75 0 0 0 2.37-4.1V27.35a4.75 4.75 0 0 0-2.37-4.1Z"
            style={{
              fill: "#3f873f",
              clipRule: "evenodd",
            }}
          />
        </clipPath>
      </defs>
      <path
        d="M52.37.63a4.75 4.75 0 0 0-4.73 0L8.44 23.25a4.75 4.75 0 0 0-2.37 4.1v45.28a4.75 4.75 0 0 0 2.37 4.1l39.2 22.64a4.75 4.75 0 0 0 4.73 0l39.19-22.64a4.75 4.75 0 0 0 2.37-4.1V27.35a4.75 4.75 0 0 0-2.37-4.1Z"
        style={{
          fill: "#3f8b3d",
          fillRule: "evenodd",
        }}
      />
      <g
        style={{
          clipPath: "url(#b)",
        }}
      >
        <path
          d="M47.56.63 8.28 23.25a4.89 4.89 0 0 0-2.53 4.1v45.28a4.54 4.54 0 0 0 1.22 3L51.1.14a4.81 4.81 0 0 0-3.54.49ZM51.32 99.82a4.55 4.55 0 0 0 1.1-.45l39.24-22.64a4.84 4.84 0 0 0 2.46-4.1V27.35a4.69 4.69 0 0 0-1.43-3.29Z"
          style={{
            fill: "none",
          }}
        />
        <path
          d="M91.64 23.25 52.33.63A5 5 0 0 0 51.1.14L7 75.64a5.33 5.33 0 0 0 1.32 1.09l39.34 22.64a4.79 4.79 0 0 0 3.66.45l41.37-75.76a5.54 5.54 0 0 0-1.05-.81Z"
          style={{
            fill: "#3f8b3d",
          }}
        />
        <path
          d="M94.12 72.63V27.35a4.86 4.86 0 0 0-2.48-4.1L52.33.63A4.72 4.72 0 0 0 50.89.1L94 73.72a4.46 4.46 0 0 0 .12-1.09ZM8.28 23.25a4.89 4.89 0 0 0-2.53 4.1v45.28a4.9 4.9 0 0 0 2.54 4.1l39.37 22.64a4.81 4.81 0 0 0 3 .58L8.51 23.12Z"
          style={{
            fill: "none",
          }}
        />
        <path
          d="M91.66 76.73a5 5 0 0 0 2.32-3L50.89.1a4.84 4.84 0 0 0-3.33.53L8.51 23.12 50.69 100a4.72 4.72 0 0 0 1.73-.58Z"
          style={{
            fill: "#3e9637",
          }}
        />
        <path
          style={{
            fill: "url(#a)",
          }}
          d="m95.31 76-.26-.44v.59l.26-.15z"
        />
        <path
          d="M91.66 76.73 52.42 99.37a4.72 4.72 0 0 1-1.73.58l.78 1.43 43.58-25.23v-.59L94 73.72a5 5 0 0 1-2.34 3.01Z"
          style={{
            fill: "url(#c)",
          }}
        />
        <path
          d="M91.66 76.73 52.42 99.37a4.72 4.72 0 0 1-1.73.58l.78 1.43 43.58-25.23v-.59L94 73.72a5 5 0 0 1-2.34 3.01Z"
          style={{
            fill: "url(#d)",
          }}
        />
      </g>
    </svg>
  );
};

export default NodeIcon;
