/*
AST = Abstract Syntax Tree

Example: 1 + 2
    
   '+'
  /   \
 1     2

Example: 3 + 4 / 5

   '+'
  /   \
 3    '/'
     /   \
    4     5

Node types:
- literal:
  {
    type: 'literal',
    // the type of the AST node

    value: 42
    // a JS literal like 42, 3.14, 'abc', true, false, null, or undefined
  }

- binary (binary expressions like 1 + 2 or 3 / 4)
  {
    type: 'binary',

    operator: '+',
    // a JS bitshift or arithmetic operator like '<<', '>>', '>>>', '+', '-', '*', '/', '%'

    left: { ... },
    // the left operand, another AST node

    right: { ... }
    // the right operand, another AST node
  }
*/

const ast = {
    type: 'binary',
    operator: '>>>',
    left: {
        type: 'binary',
        operator: '>>',
        left: {
            type: 'binary',
            operator: '<<',
            left: {
                type: 'literal',
                value: 1
            },
            right: {
                type: 'binary',
                operator: '+',
                left: {
                    type: 'literal',
                    value: 2
                },
                right: {
                    type: 'binary',
                    operator: '*',
                    left: {
                        type: 'literal',
                        value: 3
                    },
                    right: {
                        type: 'literal',
                        value: 4
                    }
                }
            }
        },
        right: {
            type: 'binary',
            operator: '-',
            left: {
                type: 'literal',
                value: 5
            },
            right: {
                type: 'binary',
                operator: '/',
                left: {
                    type: 'literal',
                    value: 6
                },
                right: {
                    type: 'literal',
                    value: 7
                }
            }
        }
    },
    right: {
        type: 'literal',
        value: 8
    }
};
const astTest = {
  type: 'binary',
  operator: '+',
  left:{
    type:'literal',
    value: 1
  },
  right:{
    type: 'literal',
    value:2
  }
};


print(astTest); 
console.log('\n',evaluate(astTest));

print(ast);
console.log('\n', evaluate(ast));

function print(ast) {
  // this function should print out the JS expression that the AST represents
  if(ast.type === 'literal')
    process.stdout.write(`${ast.value}`)
  else{
    print(ast.left);
    process.stdout.write(` ${ast.operator} `);
    print(ast.right);
  }
}

function evaluate(ast) {
  // this function should evaluate the JS expression represented by the AST
  if(ast.type == 'literal')
    return ast.value;
  else{
    opr_1 = evaluate(ast.left);
    opr_2 = evaluate(ast.right);

    switch(ast.operator){
      case '+': return opr_1 + opr_2;
      case '/': return opr_1 / opr_2;
      case '-': return opr_1 - opr_2;
      case '*': return opr_1 * opr_2;
      case '<<': return opr_1 << opr_2;
      case '>>': return opr_1 >> opr_2;
      case '>>>': return opr_1 >>> opr_2;
    }
  }
}
