enum TokenType {
  Number, 
  Identifier, 
  Equals, 
  LeftParenthesis, 
  RightParenthesis,
  BinaryOperator,
  Let,
}

const Operators = [
  "+",
  "-",
  "*",
  "/"
]

class Token {
  value: string;
  type: TokenType;

  constructor(value: string, type: TokenType) {
    this.value = value;
    this.type = type;
  }
}

function tokenize(source: string): Token[] {
  const tokens = new Array<Token>();
  
  for(let char of source) {
    if(char === "(") {
      tokens.push(new Token(char, TokenType.LeftParenthesis))
    } else if (char === ")") {
      tokens.push(new Token(char, TokenType.RightParenthesis))
    } else if (Operators.includes(char)) {
      tokens.push(new Token(char, TokenType.BinaryOperator))
    } else if (char === "=") {
      tokens.push(new Token(char, TokenType.Equals))
    }
  }

  return tokens
}