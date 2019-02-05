describe('Calculator', () => {
  beforeEach(() => {
    spyOn($, 'publish');
  });

  it('can add', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('should publish message after add', () => {
    add(3, 4);
    expect($.publish).toHaveBeenCalledWith('addition-complete');
  });
});
