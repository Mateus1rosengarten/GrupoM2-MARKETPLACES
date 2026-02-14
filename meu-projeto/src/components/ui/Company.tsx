interface CompanyProps {
  logo: string;
}

const Company: React.FC<CompanyProps> = ({ logo }) => {
  return (
    <div className="w-40 h-40">
      <img
        className="max-h-full max-w-full object-contain"
        src={logo}
        alt="logotipo marketplace"
      />
    </div>
  );
};

export default Company;
