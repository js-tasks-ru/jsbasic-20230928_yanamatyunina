let calculator = {
  a : 0,
  b : 0,

  read: function(val1,val2) {
    this.a = val1;
    this.b = val2;
  },

  sum : function() {
    return this.a+this.b;
  },

  mul: function() {
    return this.a*this.b;
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
