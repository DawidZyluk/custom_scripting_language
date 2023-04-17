enum TokenType {
  Number, 
  Identifier, 
  Equals, 
  LeftParenthesis, 
  RightParenthesis,
  BinaryOperator,
  Keyword,
}

const Keywords = [
  "let",
]

const Operators = [
  "+",
  "-",
  "*",
  "/"
]

class Token {
  value: string;
  type: TokenType;

  constructor(value = "", type: TokenType) {
    this.value = value;
    this.type = type;
  }
}

function isAlpha(char: string) {
	return char.toUpperCase() != char.toLowerCase();
}

function isSkippable(char: string) {
	return char === " " || char === "\n" || char === "\t";
}

function isInt(char: string) {
  return (char >= '0' && char <= '9');
}

function tokenize(sourceCode: string): Token[] {
  const tokens = new Array<Token>();
	const src = sourceCode.split("");

	while (src.length > 0) {
		if (src[0] == "(") {
			tokens.push(new Token(src.shift(), TokenType.LeftParenthesis));
		} else if (src[0] == ")") {
			tokens.push(new Token(src.shift(), TokenType.RightParenthesis));
		} else if (Operators.includes(src[0])) {
			tokens.push(new Token(src.shift(), TokenType.BinaryOperator));
		} else if (src[0] == "=") {
			tokens.push(new Token(src.shift(), TokenType.Equals));
		} else {
			if (isInt(src[0])) {
				let num = "";
				while (src.length > 0 && isInt(src[0])) {
					num += src.shift();
				}
				tokens.push(new Token(num, TokenType.Number));
			} else if (isAlpha(src[0])) {
				let ident = "";
				while (src.length > 0 && isAlpha(src[0])) {
					ident += src.shift();
				}

				if (Keywords.includes(ident)) {
					tokens.push(new Token(ident, TokenType.Keyword));
				} else {
					tokens.push(new Token(ident, TokenType.Identifier));
				}
			} else if (isSkippable(src[0])) {
				src.shift();
			} else {
				console.error(
					"Unreconized character found in source: ",
					src[0].charCodeAt(0),
					src[0]
				);
				Deno.exit(1);
			}
		}
	}

  return tokens
}

const source = await Deno.readTextFile("./test.txt");
for(const token of tokenize(source)) {
  console.log({value: token.value, type: TokenType[token.type]})
}