import { describe, expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

const should = chai.should();

export default function () {

  describe('Dummy example using expect', () => {
    expect(10).to.be.within(8, 12); // OK
    // expect(42).to.equal(44); // fails
    expect(true).to.be.ok; // doesn't run because the previous assertion failed.
    expect('testing').to.equal('testing');
    expect({ a: 1 }).to.eql({ a: 1 }).but.not.equal({ a: 1 });
    expect('foobar').to.not.match(/taco/);
  });

  describe('Dummy example using should', () => {
    const number = 10;

    number.should.be.within(8, 12);
    number.should.equal(10);

    'testing'.should.equal('testing');
    ({ a: 1 }).should.eql({ a: 1 }).but.should.not.equal({ a: 1 });
    'foobar'.should.not.match(/taco/);
  });
}