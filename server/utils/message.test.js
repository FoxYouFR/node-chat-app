var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Test';
    var text = 'This is a text message';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should genenrate correct location object', () => {
    var from = 'Test';
    var lat = 1;
    var lng = 1;
    var url = `https://www.google.com/maps?q=${lat},${lng}`;
    var location = generateLocationMessage(from, lat, lng);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url});
  });
});
