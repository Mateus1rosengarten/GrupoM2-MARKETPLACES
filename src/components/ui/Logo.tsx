import { LogoProps } from "../../data/types";

const Logo: React.FC<LogoProps> = ({ customClass, lightMode }) => {
  return (
    <a href="#home">
      <div className={`${customClass}`}>
        <img
          src={
            !lightMode
              ? "/images/logo/m2-logo.png"
              : "/images/logo/m2-logo-yellow.png"
          }
          alt="Logo GrupoM2"
          className="w-32 h-full sm:w-34 md:w-38 lg:w-40 "
        />
      </div>
    </a>
  );
};

export default Logo;
