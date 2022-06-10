export interface InputData {
  model: string;
  environment: string;
  input: string;
}

export interface TableDefinition {
  name: string;
  columns: string[];
  rows: string[][];
}
