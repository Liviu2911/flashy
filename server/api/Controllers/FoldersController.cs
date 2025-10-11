using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using api.Interfaces;
using api.Dtos;

namespace api.Controller;

[Route("api/[controller]")]
[ApiController]
public class FoldersController : ControllerBase
{
  private readonly IFoldersRepository _repo;
  public FoldersController(IFoldersRepository repo)
  {
    _repo = repo;
  }

  [Authorize]
  [HttpGet]
  public async Task<IActionResult> GetFoldersAsync()
  {
    var username = Request.Cookies["username"];
    if (username == null) return BadRequest("username not found");
    var folders = await _repo.GetFolders(username); 

    return Ok(folders);
  }
}
