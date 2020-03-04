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
        expect(check({ key: "prop valid" }, "key").isDefined()).is.true;
        expect(check({ key: 120 }, "key").isDefined()).is.true;
        expect(check({ key: true }, "key").isDefined()).is.true;
        expect(check({ key: false }, "key").isDefined()).is.true;
      });

      it("Prop is be False is prop", function() {
        expect(check({ key: "prop valid" }, "id").isDefined()).string("id is not a defined.");
        expect(check({ key: void 0 }, "key").isDefined()).is.not.true;
        expect(check({ key: undefined }, "key").isDefined()).is.not.true;
        expect(check({ key: null }, "key").isDefined()).is.not.true;
      });
    });

    describe("isObjectId", function() {
      it("isObjectId is be a function", function() {
        assert(typeof check().isObjectId === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ key: "5cf2fe6842c20f2eb0c0420c" }, "key").isObjectId()).is.true;
      });
      it("Prop is be False is prop", function() {
        expect(check({ key: "5cf2fe6842x20f2eb0c0420c" }, "key").isObjectId()).is.not.true;
        expect(check({ key: "prop valid" }, "id").isObjectId()).is.not.true;
        expect(check({ key: "" }, "key").isObjectId()).is.not.true;
        expect(check({ key: void 0 }, "key").isObjectId()).is.not.true;
        expect(check({ key: undefined }, "key").isObjectId()).is.not.true;
        expect(check({ key: null }, "key").isObjectId()).is.not.true;
      });
    });

    describe("isRequired", function() {
      it("isRequired is be a function", function() {
        assert(typeof check().isRequired === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ key: "5cf2fe6842c20f2eb0c0420c" }, "key").isRequired()).is.true;
        expect(check({ key: 120 }, "key").isRequired()).is.true;
        expect(check({ key: true }, "key").isRequired()).is.true;
        expect(check({ key: false }, "key").isRequired()).is.true;
      });
      it("Prop is be False is prop", function() {
        expect(check({ key: "" }, "key").isRequired()).is.not.true;
        expect(check({ key: void 0 }, "key").isRequired()).is.not.true;
        expect(check({ key: undefined }, "key").isRequired()).is.not.true;
        expect(check({ key: null }, "key").isRequired()).is.not.true;
      });
    });

    describe("isString", function() {
      it("isString is be a function", function() {
        assert(typeof check().isString === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ key: "5cf2fe6842c20f2eb0c0420c" }, "key").isString()).is.true;
        expect(check({ key: "" }, "key").isString()).is.true;
      });
      it("Prop is be False is prop", function() {
        expect(check({ key: void 0 }, "key").isString()).is.not.true;
        expect(check({ key: undefined }, "key").isString()).is.not.true;
        expect(check({ key: null }, "key").isString()).is.not.true;
        expect(check({ key: 120 }, "key").isString()).is.not.true;
        expect(check({ key: true }, "key").isString()).is.not.true;
        expect(check({ key: false }, "key").isString()).is.not.true;
      });
    });

    describe("isBoleand", function() {
      it("isBoleand is be a function", function() {
        assert(typeof check().isBoleand === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ key: true }, "key").isBoleand()).is.true;
        expect(check({ key: false }, "key").isBoleand()).is.true;
      });
      it("Prop is be False is prop", function() {
        expect(check({ key: "5cf2fe6842c20f2eb0c0420c" }, "key").isBoleand()).is.not.true;
        expect(check({ key: "" }, "key").isBoleand()).is.not.true;
        expect(check({ key: void 0 }, "key").isBoleand()).is.not.true;
        expect(check({ key: undefined }, "key").isBoleand()).is.not.true;
        expect(check({ key: null }, "key").isBoleand()).is.not.true;
        expect(check({ key: 120 }, "key").isBoleand()).is.not.true;
      });
    });

    describe("isDate", function() {
      it("isDate is be a function", function() {
        assert(typeof check().isDate === "function");
      });
      it("Prop is be True is prop is defined", function() {
        expect(check({ key: new Date() }, "key").isDate()).is.true;
        expect(check({ key: new Date().toUTCString() }, "key").isDate()).is.true;
        expect(check({ key: new Date().toISOString() }, "key").isDate()).is.true;
      });
      it("Prop is be False is prop", function() {
        expect(check({ key: "5cf2fe6842c20f2eb0c0420c" }, "key").isDate()).is.not.true;
        expect(check({ key: "" }, "key").isDate()).is.not.true;
        expect(check({ key: void 0 }, "key").isDate()).is.not.true;
        expect(check({ key: undefined }, "key").isDate()).is.not.true;
        expect(check({ key: null }, "key").isDate()).is.not.true;
        expect(check({ key: 120 }, "key").isDate()).is.not.true;
        expect(check({ key: false }, "key").isDate()).is.not.true;
      });
    });
  });
});
