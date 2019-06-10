import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task(0, 'task1', false)).toBeTruthy();
  });
});
