import Company from "../components/ui/Company";

const Companys = () => {
  return (
    <section className="w-full relative">
      <div className="mx-auto flex items-center justify-evenly gap-12">
        <Company logo="/images/sectionsImages/shopee.png" />
        <Company logo="/images/sectionsImages/ml.png" />
        <Company logo="/images/sectionsImages/shein.png" />
      </div>
    </section>
  );
};

export default Companys;
