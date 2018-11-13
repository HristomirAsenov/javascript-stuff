let expect=require('chai').expect;
const HolidayPackage=require('./classImplementaion');

describe('HolidayPackage',function () {
    let holidayPackage;
    beforeEach(function () {
        holidayPackage=new HolidayPackage('Italy','Summer');
    });
    
    it('insuranceIncluded must have defalut value - false',function () {
        expect(holidayPackage.insuranceIncluded).to.equal(false);
    });
    it('Show message if no vacationers added',function () {
        expect(holidayPackage.showVacationers()).to.equal('No vacationers are added yet');
    });
    it('generateHolidayPackage must throw an error',function () {
        expect(()=>holidayPackage.generateHolidayPackage()).to.throw();
    });
    it('addVacationer must throw an error for adding non-string',function () {
        expect(()=>holidayPackage.addVacationer(1)).to.throw();
    });
    it('addVacationer must throw an error for adding empty string',function () {
        expect(()=>holidayPackage.addVacationer(" ")).to.throw();
    });
    it('addVacationer must throw an error for adding only one name',function () {
        expect(()=>holidayPackage.addVacationer('Pesho')).to.throw();
    });
    it('showVacationers must show correct message',function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshov');
        expect(holidayPackage.showVacationers()).to.equal('Vacationers:\nIvan Ivanov\nPesho Peshov')
    });
    it('generateHolidatPackage must show a correct sum for Summer season',function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshov');
        holidayPackage.insuranceIncluded=true;
        expect(holidayPackage.generateHolidayPackage())
            .to
            .equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshov\nPrice: 1100');
    })

});