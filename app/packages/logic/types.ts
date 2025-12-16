export type StepType = 'reassurance' | 'action' | 'warning' | 'info';

export interface StepOption {
  label: string;
  next: string;
}

export interface Step {
  id: string;
  type: StepType;
  title?: string;
  content: string;
  next?: string;
  options?: StepOption[];
}

export type Flow = Step[];
