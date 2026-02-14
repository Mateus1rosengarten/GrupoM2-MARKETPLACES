type LogoProps = {
  customClass?: string;
};

const Logo: React.FC<LogoProps> = ({ customClass }) => {
  return (
    <a href="#home">
      <div className={`${customClass}`}>
        <img
          src="/images/logo/logom2.png"
          alt="Logo GrupoM2"
          className="w-32 h-full sm:w-34 md:w-38 lg:w-40 "
        />
      </div>
    </a>
  );
};

export default Logo;
