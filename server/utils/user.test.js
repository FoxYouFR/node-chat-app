const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id:'123',
      name: 'Florian',
      room: 'JS Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node room', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('1');

    expect(user).toBe(users.users[0]);
  });

  it('should not find user', () => {
    var user = users.getUser('4');

    expect(user).toNotExist();
  });
});
