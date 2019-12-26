const test = require("tape");
const helpers = require("./../views/helpers/index");

test("uppercaseFirstLetter is working as expected", t => {
  t.deepEqual(
    helpers.uppercaseFirstLetter("alex"),
    "Alex",
    "name should return with the first letter capitalised"
  );
  t.end();
});

test("goodBad is working as expected", t => {
  t.deepEqual(
    helpers.goodBad(true),
    "YOU HAVE BEEN GOOD",
    "given true value goodBad will return 'YOU HAVE BEEN GOOD'"
  );
  t.deepEqual(
    helpers.goodBad(false),
    "YOU HAVE BEEN BAD",
    "given false value goodBad will return 'YOU HAVE BEEN BAD'"
  );
  t.end();
});
