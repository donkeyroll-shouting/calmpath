"use client";

import { FlowRenderer } from "@packages/ui/FlowRenderer";
import flowsData from "@packages/content/flows.json";
import { Flow } from "@packages/logic/types";

export default function FlowPage() {
    const flow: Flow = flowsData as Flow;

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Crying Guide</h1>
            <FlowRenderer flow={flow} />
            <div className="mt-8 text-sm text-gray-500 text-center max-w-sm">
                This is a guide, not medical advice. Always consult your pediatrician if you are unsure.
            </div>
        </div>
    );
}
