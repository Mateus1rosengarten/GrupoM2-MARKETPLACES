import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import ProcessStep from './ProcessStep';

const WorkProcess: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col gap-6 py-4 sm:py-8">
      <div className="flex w-full items-center justify-between">
        <ProcessStep process="DIAGNÓSTICO DE POTENCIAL" />
        <ArrowRight className="text-foreground" />
        <ProcessStep process="PLANEJAMENTO ESTRATÉGICO" />
      </div>

      <div className="flex w-full max-w-[600px] justify-evenly space-x-20 sm:space-x-40">
        <ArrowDown className="self-start text-foreground" />
        <ArrowUp className="self-start text-foreground" />
      </div>

      <div className="flex w-full items-center justify-between">
        <ProcessStep process="ANÁLISE DE RESULTADOS" />
        <ArrowLeft className="text-foreground" />
        <ProcessStep process="PRODUÇÃO DE CONTEÚDO" />
      </div>
    </div>
  );
};

export default WorkProcess;
