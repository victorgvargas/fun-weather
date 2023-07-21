import { Current } from './current.model';

interface Pop {
  pop: number;
}

export type Hourly = Pop & Current;
