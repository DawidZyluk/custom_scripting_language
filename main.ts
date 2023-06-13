import Parser from "./syntax/parser.ts";
import { evaluate } from "./runtime/interpreter.ts";

repl();

function repl() {
  const parser = new Parser();
  console.log("\nJS++ v0.1");

  while (true) {
    const input = prompt("> ");

    if (!input || input.includes("exit")) {
      Deno.exit(1);
    }

    const program = parser.produceAST(input);
    console.log("------------------------ PROGRAM AST --------------------")
    console.log(program);

    const result = evaluate(program);
    console.log("------------------------ RESULT --------------------")
    console.log(result);
  }
}

// deno run -A .\main.ts