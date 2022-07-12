// NOT USED
describe('POST /api/user/signup', () => {
    test('It should return protected page if token is correct',  async done => {
      let Cookies;
  
      // Create a new user
      await agent
        .post('/api/user/signup')
        .send({ email: 'hello@world.com', password: '123456' })
        .expect(201)
        .then(res => {
          expect(res.body.user).toBeTruthy();
  
          // Save the cookie to use it later to retrieve the session
          Cookies = res.headers['set-cookie'].pop().split(';')[0];
        });
  
      const req = agent.get('/');
      req.cookies = Cookies;
  
      req.end(function(err, res) {
        if (err) {return done(err);}
  
        expect(res.text).toBe('Protected page');
        expect(res.status).toBe(200);
        done();
      });
    });
  });