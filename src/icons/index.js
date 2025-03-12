export const LightModeSvg = ({
  width = "36px",
  height = "36px",
  size,
  onClick,
}) => {
  if (size) {
    width = size;
    height = size;
  }
  return (
    <div>
      <svg
        width={width}
        height={height}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M12.9997 19.7709V22.4792"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9997 3.52087V6.22921"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.21144 17.7883L6.29395 19.7058"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7056 6.29419L17.7881 8.21169"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.22884 13H3.52051"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.4788 13H19.7705"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.21144 8.21169L6.29395 6.29419"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7056 19.7058L17.7881 17.7883"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const DarkModeSvg = ({
  width = "36px",
  height = "36px",
  size,
  onClick,
}) => {
  if (size) {
    width = size;
    height = size;
  }
  return (
    <div>
      <svg
        width={width}
        height={height}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M15.1667 6.50004V4.33337"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.084 5.41667H16.2507"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5837 7.58337V11.9167"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.7503 9.75004H18.417"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8503 17.3334C16.142 18.2001 13.0003 17.6584 10.8337 15.4917C8.12533 12.7834 7.90866 8.45008 10.0753 5.41675C5.63366 5.85008 2.16699 9.53342 2.16699 14.0834C2.16699 18.8501 6.06699 22.7501 10.8337 22.7501C14.4087 22.7501 17.5503 20.4751 18.8503 17.3334Z"
          stroke="#1D9BF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const TodoIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <defs>
        {/* <style>
          {`.a { fill: none; stroke: #000000; strokeLinecap: round; strokeLinejoin: round; }`}
        </style> */}
      </defs>
      <circle
        cx="24"
        cy="24"
        r="21.5"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      />
      {/* <circle className="a" cx="24" cy="24" r="21.5"></circle> */}
      <line className="a" x1="24" y1="28.8309" x2="14.1215" y2="19.757"></line>
      <line className="a" x1="24" y1="28.8309" x2="45.5" y2="5.7944"></line>
    </g>
  </svg>
);

export const HabitIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <defs></defs>
      <path
        className="a"
        d="M20.2688,28.2021l-1.5169,1.7087a8.3516,8.3516,0,1,1,0-11.8216L29.2481,29.9108a8.3516,8.3516,0,1,0,0-11.8216l-1.5169,1.7087"
      ></path>
    </g>
  </svg>
);

export const ProhibitionIcon = () => (
  <svg
    viewBox="0 0 48 48"
    id="a"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <defs></defs>
      <circle id="b" className="c" cx="24" cy="24" r="21.5"></circle>
      <line
        className="c"
        x1="39.2011"
        y1="39.2011"
        x2="8.7989"
        y2="8.7989"
      ></line>
    </g>
  </svg>
);

export const NoteIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <defs></defs>
      <path
        className="a"
        d="M5.5,42.5V35.207L26.8864,13.8788l7.1616,7.2486L12.6239,42.5Z"
      ></path>
      <path
        className="a"
        d="M38.1459,6.2445a2.5559,2.5559,0,0,0-3.6064,0L30.42,10.3538,37.6342,17.55l4.1194-4.1093a2.54,2.54,0,0,0,0-3.5974Z"
      ></path>
    </g>
  </svg>
);

export const DeleteIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <defs></defs>
      <path
        className="a"
        d="M11.2745,13.7073H36.7255a0,0,0,0,1,0,0V39.94a3.56,3.56,0,0,1-3.56,3.56H14.8343a3.56,3.56,0,0,1-3.56-3.56V13.7073A0,0,0,0,1,11.2745,13.7073Z"
      ></path>
      <polygon
        className="a"
        points="30.953 7.569 30.063 4.5 17.937 4.5 17.047 7.569 9.328 7.569 9.328 13.707 38.672 13.707 38.672 7.569 30.953 7.569"
      ></polygon>
    </g>
  </svg>
);

export const AddIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export const DropdownIcon = () => (
  <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z"
        // stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16 10.99L13.13 14.05C12.9858 14.2058 12.811 14.3298 12.6166 14.4148C12.4221 14.4998 12.2122 14.5437 12 14.5437C11.7878 14.5437 11.5779 14.4998 11.3834 14.4148C11.189 14.3298 11.0142 14.2058 10.87 14.05L8 10.99"
        // stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const DropupIcon = () => (
  <svg
    viewBox="-0.5 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(180)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z"
        // stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M16 10.99L13.13 14.05C12.9858 14.2058 12.811 14.3298 12.6166 14.4148C12.4221 14.4998 12.2122 14.5437 12 14.5437C11.7878 14.5437 11.5779 14.4998 11.3834 14.4148C11.189 14.3298 11.0142 14.2058 10.87 14.05L8 10.99"
        // stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);
