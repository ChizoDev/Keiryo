export interface Token {
    type: string;
    value: string | null;
}

export interface Stream {
    input: string;
    output: Token[];
}