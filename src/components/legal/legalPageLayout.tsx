import React from "react";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <div className="bg-background px-6 py-20 mt-20">
      <div className="max-w-4xl mx-auto sm:my-20 bg-surface rounded-2xl p-8 md:p-14 shadow-2xl">
        <h1 className="font-varela text-3xl md:text-5xl text-primary mb-2 sm:mb-4 text-brand">
          {title}
        </h1>

        <p className="font-inter text-sm text-gray-400 mb-12">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        {children}
      </div>
    </div>
  );
};

export default LegalPageLayout;
