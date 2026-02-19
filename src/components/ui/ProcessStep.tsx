type ProcessProps = {
  process: string;
};

const ProcessStep: React.FC<ProcessProps> = ({ process }) => {
  return (
    <div className="max-w-[45%] flex-1 rounded-2xl bg-brand px-4 py-3 text-center text-xs font-semibold text-foreground sm:py-5 sm:text-sm">
      {process}
    </div>
  );
};

export default ProcessStep;
