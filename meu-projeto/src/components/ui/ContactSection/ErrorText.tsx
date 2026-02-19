type ErrorTextType = {
  text: string | undefined;
};

const ErrorText = ({ text }: ErrorTextType) => {
  return <p className="text-red-400 font-inter text-xs mt-1 ml-3">{text}</p>;
};

export default ErrorText;
