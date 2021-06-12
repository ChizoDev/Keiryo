import type { Token, Stream } from '../mod.ts';

export class Tokenizer {
    private input: string;
    private tokens: Token[];
    private index: number;

    constructor (input: string) {
        this.input = input;
        this.tokens = [];
        this.index = 0;
    }

    public run() {
        while (this.index < this.input.length) {
            // ...
        }
    }

    public result(): Stream {
        return { input: this.input, output: [...this.tokens, { type: 'EOF', value: null }] };
    }
}