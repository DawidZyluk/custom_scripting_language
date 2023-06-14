import Parser from "./syntax/parser.ts";
import { evaluate } from "./runtime/interpreter.ts";
import Environment from "./runtime/environment.ts";
import { MK_BOOL, MK_NULL, MK_NUMBER } from "./runtime/values.ts";

repl();

function repl() {
  const parser = new Parser();
  const env = new Environment();
  env.declareVar("PI", MK_NUMBER(3.14159265359), true)
  env.declareVar("true", MK_BOOL(true), true);
  env.declareVar("false", MK_BOOL(false), true);
  env.declareVar("null", MK_NULL(), true);
  console.log("\nJS++ v0.1");

  while (true) {
    const input = prompt("> ");

    if (!input || input.includes("exit")) {
      Deno.exit(1);
    }

    const program = parser.produceAST(input);
    console.log("------------------------ PROGRAM AST --------------------")
    console.log(program);

    const result = evaluate(program, env);
    console.log("------------------------ RESULT --------------------")
    console.log(result);
  }
}

// deno run -A .\main.ts