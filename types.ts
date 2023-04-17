export enum TokenType {
  Number, 
  Identifier, 
  Equals, 
  LeftParenthesis, 
  RightParenthesis,
  BinaryOperator,
  Keyword,
  EOF
}

export const Keywords = [
  "let",
]

export const Operators = [
  "+",
  "-",
  "*",
  "/"
]

export class Token {
  value: string;
  type: TokenType;

  constructor(value = "", type: TokenType) {
    this.value = value;
    this.type = type;
  }
}