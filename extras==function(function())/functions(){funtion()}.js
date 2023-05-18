const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a + b;
};

const divide = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a + b;
};

calculator = (a, b, operator) =>{  //operator is going to take the actual function value then going to add and then it will sent to return and then the ans will get the ans. 
    return operator(a,b);
}

calculator(5, 2, mul); // 10
calculator(5, 2, add); // 7
calculator(5, 2, divide); // 4.5
calculator(5, 2, substract); // 3