
const isOk = require('./coord');


for (var i = 0; i < 10; i++) {
    test('coordCheck', () => {
        isOk();
        expect(isOk()).toBe(1);
    });
}
