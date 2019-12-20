const test = require("tape");
const request = require("supertest");
const app = require("../app");

test("tape is working", t => {
    t.equal(1, 1, "one should be one");
    t.end();
  });

  test("/ will load with 200", t => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        t.error(err);
        t.deepEqual(res.statusCode, 200, "/ should load with 200");
        t.end();
      });
  });

  test('/bullshit should return a 404' , t =>{
      request(app)
      .get('/bullshit')
      .expect(404)
      .end((err,res)=>{
     t.error(err);
     t.deepEqual(res.statusCode, 404 , "/bbullshit should load with a 404")
     t.end();
      })
  })