import { MD5Pipe } from './md5.pipe';

describe('MD5Pipe', () => {
  it('create an instance', () => {
    const pipe = new MD5Pipe();
    expect(pipe).toBeTruthy();
  });
});
