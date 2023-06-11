export enum TokenType {
  Number, 
  Identifier, 
  Equals, 
  Comma,
  Dot,
  Colon,
  OpenParen, 
  CloseParen,
  LeftBrace,
  RightBrace,
  LeftBracket,
  RightBracket,
  BinaryOperator,
  Keyword,
  EOF,
  EOL
}

export const Keywords = [
  "let",
  "const",
  "function",
  "for",
  "of",
  "if",
  "else",
  "while"
]

export const Operators = [
  "+",
  "-",
  "*",
  "/",
  "%",
  "<",
  ">",
]

export class Token {
  value: string;
  type: TokenType;

  constructor(value = "", type: TokenType) {
    this.value = value;
    this.type = type;
  }
}