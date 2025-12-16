import React from 'react';
import { Step } from '../logic/types';

interface StepCardProps {
    step: Step;
    onOptionSelect: (nextStepId: string) => void;
    onNext: () => void;
}

export const StepCard: React.FC<StepCardProps> = ({ step, onOptionSelect, onNext }) => {
    const isWarning = step.type === 'warning';
    const isAction = step.type === 'action';

    return (
        <div className={`p-6 rounded-2xl shadow-lg max-w-md w-full mx-auto transition-all duration-500 ease-in-out transform ${isWarning ? 'bg-red-50 border-2 border-red-200' : 'bg-white'
            }`}>
            {step.title && (
                <h2 className={`text-2xl font-bold mb-4 ${isWarning ? 'text-red-700' : 'text-gray-800'}`}>
                    {step.title}
                </h2>
            )}

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {step.content}
            </p>

            <div className="space-y-3">
                {step.options ? (
                    step.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => onOptionSelect(option.next)}
                            className="w-full py-3 px-6 text-left rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium transition-colors"
                        >
                            {option.label}
                        </button>
                    ))
                ) : step.next ? (
                    <button
                        onClick={onNext}
                        className={`w-full py-3 px-6 rounded-xl font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] ${isWarning ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
                            }`}
                    >
                        Continue
                    </button>
                ) : null}
            </div>
        </div>
    );
};
