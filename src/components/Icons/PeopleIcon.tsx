interface Props {
  className?: string;
}

const People: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 11C11.206 11 13 9.206 13 7C13 4.794 11.206 3 9 3C6.794 3 5 4.794 5 7C5 9.206 6.794 11 9 11ZM17 13C18.654 13 20 11.654 20 10C20 8.346 18.654 7 17 7C15.346 7 14 8.346 14 10C14 11.654 15.346 13 17 13ZM22 19C22 19.552 21.553 20 21 20H16C16 20.552 15.553 21 15 21H3C2.447 21 2 20.552 2 20C2 16.14 5.141 13 9 13C10.927 13 12.673 13.783 13.94 15.046C14.809 14.374 15.879 14 17 14C19.757 14 22 16.243 22 19Z"
        fill="#878FB8"
      ></path>
    </svg>
  );
};

export default People;
