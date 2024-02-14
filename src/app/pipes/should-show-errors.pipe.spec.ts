import { ShouldShowErrorsPipe } from './should-show-errors.pipe';

describe('ShouldShowErrorsPipe', () => {
  it('create an instance', () => {
    const pipe = new ShouldShowErrorsPipe();
    expect(pipe).toBeTruthy();
  });
});
