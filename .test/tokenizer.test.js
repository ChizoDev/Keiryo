/* Test File 1 */
import { Tokenizer } from '../src/mod.ts';

Deno.test({
    name: 'Tokenizer',
    fn() {
        const test = `
        # Comment
        ~!@$%^&*()-+={}[]|:;<>,./?
        `

        const tokenizer = new Tokenizer(test);
        tokenizer.run();

        console.log(tokenizer.result());
    }
})