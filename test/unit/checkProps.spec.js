// TDD using RGR
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();
const { check, checkErrors } = require("./../../src/checkProps");

describe("Check Router Props", function() {
  describe("Check", function() {
    it("Check is be a function ", function() {
      assert(typeof check === "function");
    });
    describe("isDefined", function() {
      it("isDefined is be a function", function() {
        assert(typeof check().isDefined === "function");
      });

      it("Prop is be True is prop is defined", function() {
        expect(check({ _id: "prop valid" }, "_id").isDefined()).is.true;
        expect(check({ _id: 120 }, "_id").isDefined()).is.true;
        expect(check({ _id: true }, "_id").isDefined()).is.true;
        expect(check({ _id: false }, "_id").isDefined()).is.true;
      });

      it("Prop is be False is prop is undefined", function() {
        expect(check({ _id: "prop valid" }, "id").isDefined()).string("id is not a defined.");
        expect(check({ _id: void 0 }, "_id").isDefined()).is.not.true;
        expect(check({ _id: undefined }, "_id").isDefined()).is.not.true;
        expect(check({ _id: null }, "_id").isDefined()).is.not.true;
      });
    });

    describe("isObjectId", function() {
      it("isObjectId is be a function", function() {
        assert(typeof check().isObjectId === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ _id: "5cf2fe6842c20f2eb0c0420c" }, "_id").isObjectId()).is.true;
      });
      it("Prop is be False is prop is undefined", function() {
        expect(check({ _id: "5cf2fe6842x20f2eb0c0420c" }, "_id").isObjectId()).is.not.true;
        expect(check({ _id: "prop valid" }, "id").isObjectId()).is.not.true;
        expect(check({ _id: "" }, "_id").isObjectId()).is.not.true;
        expect(check({ _id: void 0 }, "_id").isObjectId()).is.not.true;
        expect(check({ _id: undefined }, "_id").isObjectId()).is.not.true;
        expect(check({ _id: null }, "_id").isObjectId()).is.not.true;
      });
    });

    describe("isRequired", function() {
      it("isRequired is be a function", function() {
        assert(typeof check().isRequired === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ _id: "5cf2fe6842c20f2eb0c0420c" }, "_id").isRequired()).is.true;
        expect(check({ _id: 120 }, "_id").isRequired()).is.true;
        expect(check({ _id: true }, "_id").isRequired()).is.true;
        expect(check({ _id: false }, "_id").isRequired()).is.true;
      });
      it("Prop is be False is prop is undefined", function() {
        expect(check({ _id: "" }, "_id").isRequired()).is.not.true;
        expect(check({ _id: void 0 }, "_id").isRequired()).is.not.true;
        expect(check({ _id: undefined }, "_id").isRequired()).is.not.true;
        expect(check({ _id: null }, "_id").isRequired()).is.not.true;
      });
    });
  });
});
