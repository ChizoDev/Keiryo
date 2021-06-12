import type { Token, Stream } from '../mod.ts';
import { operator } from '../mod.ts';

export class Tokenizer {
    private input: string;
    private tokens: Token[];
    private index: number;
    private token: string;

    constructor (input: string) {
        this.input = input;
        this.tokens = [];
        this.index = 0;
        this.token = '';
    }

    public run() {
        while (this.index < this.input.length) {
            this.token = this.input[this.index];

            switch (this.token) {
                default: {
                    if (operator.has(this.token)) {
                        this.tokens.push({ type: operator.get(this.token), value: this.token });
                        this.index += 1;
                    }
                }
            }
        }
    }

    public result(): Stream {
        return { input: this.input, output: [...this.tokens, { type: 'EOF', value: null }] };
    }
}