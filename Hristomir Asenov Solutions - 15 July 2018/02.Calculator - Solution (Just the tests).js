describe('constructor', function () {
   let calculator;
   beforeEach(function () {
       calculator = new Calculator();
   });
   it('expences property should be empty arr', function () {
       let result = calculator.expenses;
       let obj = {};

       expect(result).to.be.eql([]);
   });

    describe('add function', function () {
        it('add string and numbers', function () {
            calculator.add('Pesho');
            calculator.add(10);
            calculator.add(1.5);
            calculator.add(-10);

            let result = calculator.expenses;
            expect(result).to.eql(['Pesho', 10, 1.5, -10]);
        });

        it('add objects, array', function () {
            calculator.add([1,2,3]);
            calculator.add({});

            let result = calculator.expenses;
            expect(result).to.be.eql([[1,2,3], {}]);
        })
    });

    describe('divide function', function () {
        it('test with no numbers into the arr', function () {
            calculator.add('Pesho');
            calculator.add({});
            let result = () => calculator.divideNums();
            expect(result).to.throw(`There are no numbers in the array!`)
        });

        it('test with one number', function () {
            calculator.add('Pesho');
            calculator.add({});
            calculator.add(-9.9);
            let result = calculator.divideNums();
            expect(result).to.be.closeTo(-9.9, 0.01);
        });

        it('test with more then two numbers', function () {

            calculator.add('Pesho');
            calculator.add({});
            calculator.add(-9.9);
            calculator.add(9);
            calculator.add(9.5);

            let result = calculator.divideNums();
            expect(result).to.be.closeTo(-0.115, 0.01);
        });

        it('test with more then two numbers', function () {

            calculator.add('Pesho');
            calculator.add({});
            calculator.add(-9.9);
            calculator.add(9);
            calculator.add(0);

            let result = calculator.divideNums();
            expect(result).to.be.eql(`Cannot divide by zero`);
        })

    });

    describe('toString', function () {
        it('test empty expenses', function () {

            let result = calculator.toString();

            expect(result).to.be.eql('empty array');
        });


        it('test with 5 elements', function () {

            calculator.add('Peshoo');
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add(-1.5);
            calculator.add(300);

            let result = calculator.toString();

            expect(result).to.be.eql(`Peshoo -> [object Object] -> 1,2,3 -> -1.5 -> 300`);
        })

    });

    describe('orderBy function', function () {
        it('order empty expeses', function () {
            let result = calculator.orderBy();
            expect(result).to.be.eql(`empty`)
        });

        it('order with numbers', function () {
            calculator.add(9);
            calculator.add(-9.9);
            calculator.add(0);

            let result = calculator.orderBy();
            expect(result).to.be.eql(`-9.9, 0, 9`)
        });

        it('order with mixed types', function () {
            calculator.add(9);
            calculator.add(-9.9);
            calculator.add('Pesho');
            calculator.add(0);
            calculator.add({});

            let result = calculator.orderBy();
            expect(result).to.be.eql(`-9.9, 0, 9, Pesho, [object Object]`)
        })
    })
});