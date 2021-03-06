import * as React from "react";

const D12Icon = (props) => {
  let color = "#662d91";
  if (props.active) {
    color = " #3E1B6B";
  }
  if (props.button) {
    color = "none";
  }

  return (
    <svg data-name="Layer 1" viewBox="0 0 66.74 71.67" {...props}>
      <path
        fill={color}
        d="M20.36 54.32l-8.17-25.14 21.38-15.54 21.39 15.54-8.17 25.14H20.36z"
      />
      <path
        d="M33.57 13.92l21.11 15.34-8.06 24.82H20.53l-8.07-24.82 21.11-15.34m0-.58L11.91 29.08l8.28 25.47h26.77l8.28-25.47-21.67-15.74z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M47.23 54.5l8.2-25.24 11.07-4.62v21.61L54.58 63.09l-7.35-8.59z"
      />
      <path
        d="M66.27 24.99v21.19L54.56 62.7l-7.07-8.26 8.13-25 10.65-4.45m.47-.71l-11.5 4.8-8.28 25.47 7.64 8.92 12.14-17.15v-22z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M33.81 13.23V.32l20.53 6.55 12.04 17.31-11.11 4.64-21.46-15.59z"
      />
      <path
        d="M34.04.64L54.2 7.07l11.82 17-10.72 4.48L34.04 13.1V.64M33.57 0v13.34l21.67 15.74 11.5-4.8L54.49 6.67 33.57 0z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M.37 24.18L12.9 7.14 33.34.33v12.9L11.88 28.82.37 24.18z"
      />
      <path
        d="M33.1.65V13.1L11.85 28.55.74 24.07 13.05 7.33l20-6.68m.52-.65L12.76 6.94 0 24.28l11.91 4.8 21.66-15.74V0z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M.23 46.46V24.64l11.49 4.62 8.2 25.24-7.36 9.09L.23 46.46z"
      />
      <path
        d="M.47 24.98l11.06 4.46 8.13 25-7.09 8.76L.47 46.38v-21.4m-.47-.7v22.25l12.55 17.45 7.64-9.43-8.28-25.47L0 24.28z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M12.94 63.88l7.36-9.09h26.55l7.35 8.58-20.63 8.05-20.63-7.54z"
      />
      <path
        d="M46.75 55.02l7.06 8.25-20.24 7.89-20.2-7.4 7-8.74h26.38m.21-.47H20.19l-7.64 9.43 21 7.68 21-8.19-7.64-8.92z"
        fill="#fff"
      />
    </svg>
  );
};

export default D12Icon;
