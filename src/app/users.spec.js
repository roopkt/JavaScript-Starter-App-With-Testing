describe('Users', () => {
  it('can add user and return id', () => {
    var user = {
      id: 1,
      name: 'Ron'
    };
    var result = addUser(user);
    var expected = 1;
    expect(result).toBe(expected);
  });

  it('can add user and publish addusersuccess message', () => {
    var user = {
      id: 1,
      name: 'Ron'
    };
    spyOn($, 'publish');
    addUser(user);
    expect($.publish).toHaveBeenCalledWith('addUserSuccess', 1);
  });

  it('should throw excpetion when user is null', () => {
    var user = null;

    expect(() => {
      addUser(user);
    }).toThrowError('user is required');
  });
});
