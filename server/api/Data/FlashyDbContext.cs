using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace api.Data;

public class FlashyDbContext : IdentityDbContext<AppUser>
{
  public FlashyDbContext(DbContextOptions opts) : base (opts)
  { }
}
