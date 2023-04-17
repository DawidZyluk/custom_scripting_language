import {
  Statement,
  Program,
  Expression,
  BinaryExpression,
  NumericLiteral,
  Identifier,
} from "./ast.ts";
import { tokenize } from "./index.ts";
import { Token, TokenType } from "./types.ts";

export default class Parser {
  private tokens: Token[] = [];

  private not_eof(): boolean {
    return this.tokens[0].type !== TokenType.EOF;
  }

  private eat() {
    const prev = this.tokens.shift() as Token;
    return prev;
  }

  public produceAST(sourceCode: string): Program {
    this.tokens = tokenize(sourceCode);
    const program: Program = {
      kind: "Program",
      body: [],
    };

    while (this.not_eof()) {
      program.body.push(this.parse_statement());
    }

    return program;
  }

  private parse_statement(): Statement {
    return this.parse_expression();
  }

  private parse_expression(): Expression {
    return this.parse_primary_expression();
  }

  private parse_primary_expression(): Expression {
    const token = this.tokens[0].type;

    switch (token) {
      case TokenType.Identifier:
        return { kind: "Identifier", symbol: this.eat().value } as Identifier;
      case TokenType.Number:
        return { kind: "NumericLiteral", value: parseFloat(this.eat().value) } as NumericLiteral;

      default:
        console.log("Unexpected token found during parseing")
        Deno.exit(1);
    }
  }
}
