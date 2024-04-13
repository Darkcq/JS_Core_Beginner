/*Создайте блок кода внутри функции и объявите переменную с именем x с
использованием var, let и const. Попытайтесь обратиться к этой переменной как внутри, так
и вне блока. Какие переменные видны снаружи блока, а какие нет?*/

function functionScope() {
    {
      var x_var = 'var переменная';
      let x_let = 'let переменная';
      const x_const = 'const переменная';
  
      console.log('Внутри блока:');
      console.log('(var):', x_var);
      console.log('(let):', x_let);
      console.log('(const):', x_const);
    }
  
    console.log('Снаружи блока:');
    console.log('(var):', x_var);
    console.log('(let):', x_let);
    console.log('(const):', x_const);
  }
  
  functionScope();
  // У let и const блочная видимость