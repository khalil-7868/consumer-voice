interface Props {
  className?: string;
}
export default function SearchLogo(props: Props) {
  return (
    <svg
      className={props.className}
      width="71"
      height="80"
      viewBox="0 0 71 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity=".1"
        d="M64.393 34.316c-6.33 15.966-38.359 37.172-54.325 30.843-15.966-6.33.603-16.693 6.932-32.659 6.33-15.966 4.5-41.614 19.77-25.968C49.916 23.056 70.721 18.35 64.392 34.316z"
        fill="#599E60"
      />
      <circle
        cx="17.507"
        cy="27.507"
        r="15.507"
        stroke="#599E60"
        strokeWidth="4"
      />
      <rect
        x="29.609"
        y="35.285"
        width="13.464"
        height="4.518"
        rx="2.259"
        transform="rotate(45 29.61 35.285)"
        fill="#599E60"
      />
    </svg>
  );
}
