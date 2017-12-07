var expect = require('expect');

var { generateMessage,generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Martin';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toInclude({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Tinjo';
    var latitude = 3;
    var longitude = 5;
    var url = 'https://www.google.com/maps?q=3,5';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toInclude({ from, url });
  });
});
