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
  public async Task<IActionResult> GetFoldersAsync([FromBody] GetFolders user)
  {
    var username = user.Username;
    var folders = await _repo.GetFolders(username); 

    return Ok(folders);
  }

  [Authorize]
  [HttpPost]
  public async Task<IActionResult> CreateFolder([FromBody] NewFolder newFolder)
  {
    try 
    {
      var folder = await _repo.CreateFolder(newFolder);
      return Ok(folder);
    } catch(Exception e)
    {
      return StatusCode(500, new { message = e.Message, trace = e.StackTrace });
    }
  }

  [Authorize]
  [HttpPut("{id:int}")]
  public async Task<IActionResult> EditFolder([FromRoute] int id, [FromBody] EditFolder editFolder)
  {
    var folder = await _repo.EditFolder(id, editFolder.Name);
    if (folder == null) return StatusCode(500, "Server error");
    return Ok(folder);
  }

  [Authorize]
  [HttpDelete("{id:int}")]
  public async Task<IActionResult> DeleteFolder([FromRoute] int id)
  {
    var folder = await _repo.DeleteFolder(id);
    if (folder == null) return StatusCode(500, "Server error");
    return Ok(folder);
  }
}
