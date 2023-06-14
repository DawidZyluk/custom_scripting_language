export enum TokenType {
  Number, 
  Identifier, 
  Let,
  Const,
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