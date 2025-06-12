import { ReverseNamePipe } from './reverse-name.pipe';

describe('ReverseNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseNamePipe();
    expect(pipe).toBeTruthy();
  });
});
