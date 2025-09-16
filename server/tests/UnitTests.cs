using api.Data;
using api.Repositories;
using api.Dtos;
using Microsoft.EntityFrameworkCore;

namespace tests.UnitTests;

[TestClass]
public class RegisterTests
{
  private RegisterRepository _repo;
  private FlashyDbContext _context;

  [TestInitialize]
  public void Setup()
  {
    var options = new DbContextOptionsBuilder<FlashyDbContext>()
      .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
      .Options;

    _context = new FlashyDbContext(options);
    _repo = new RegisterRepository(_context);
  }

  [TestMethod]
  public async Task TestCreatedAccounts()
  {
    var newUser = new CreateUser { Username = "liviu", Email = "and@rei", Password = "123" };
    var result = await _repo.CreateAccount(newUser);

    Assert.IsNotNull(result);
  }
}
