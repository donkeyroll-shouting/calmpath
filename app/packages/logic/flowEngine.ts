import { Flow, Step } from './types';

export class FlowEngine {
    private flow: Flow;
    private stepMap: Map<string, Step>;

    constructor(flow: Flow) {
        this.flow = flow;
        this.stepMap = new Map(flow.map(step => [step.id, step]));
    }

    getStep(stepId: string): Step | undefined {
        return this.stepMap.get(stepId);
    }

    getInitialStep(): Step | undefined {
        return this.flow.length > 0 ? this.flow[0] : undefined;
    }
}
