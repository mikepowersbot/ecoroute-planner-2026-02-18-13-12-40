import React from "react";

interface Step {
  id: number;
  label: string;
  description?: string;
}

interface AlgorithmFlowDiagramProps {
  steps: Step[];
}

export default function AlgorithmFlowDiagram({ steps }: AlgorithmFlowDiagramProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <div className="flex items-center justify-center min-w-[600px]">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg mb-2">
                {step.id}
              </div>
              <div className="text-sm font-semibold text-center max-w-[100px]">{step.label}</div>
              {step.description && (
                <div className="text-xs text-muted-foreground text-center mt-1 max-w-[100px]">
                  {step.description}
                </div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center justify-center mx-4">
                <svg className="w-16 h-8" viewBox="0 0 100 50" fill="none">
                  <path
                    d="M 10 25 L 90 25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="text-primary"
                  />
                  <polygon
                    points="90,20 100,25 90,30"
                    fill="currentColor"
                    className="text-primary"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}