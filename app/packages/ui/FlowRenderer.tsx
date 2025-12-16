import React, { useState, useEffect } from 'react';
import { Flow, Step } from '../logic/types';
import { FlowEngine } from '../logic/flowEngine';
import { StepCard } from './StepCard';

interface FlowRendererProps {
    flow: Flow;
}

export const FlowRenderer: React.FC<FlowRendererProps> = ({ flow }) => {
    const [engine] = useState(() => new FlowEngine(flow));
    const [currentStep, setCurrentStep] = useState<Step | undefined>(undefined);

    useEffect(() => {
        setCurrentStep(engine.getInitialStep());
    }, [engine]);

    const handleNext = (nextStepId: string) => {
        const next = engine.getStep(nextStepId);
        if (next) {
            setCurrentStep(next);
        }
    };

    if (!currentStep) {
        return <div className="text-center p-8 text-gray-500">Loading flow...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full p-4">
            <StepCard
                step={currentStep}
                onOptionSelect={handleNext}
                onNext={() => currentStep.next && handleNext(currentStep.next)}
            />
        </div>
    );
};
