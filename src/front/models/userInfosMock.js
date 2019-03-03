export const userInfosMockData = {
  login: 'johnDoeIsNotAffraid',
  firstname: 'John',
  lastname: 'Doe',
  picture:  require('../img/user.jpg'), // or from an url: 'https://placeimg.com/120/120/people', // or from a relative path (NOTE: this path like public/.. may not be availaible when in dev hot reload!) './public/img/user.jpg',
  showPicture: true,
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ'
};
export default userInfosMockData;
