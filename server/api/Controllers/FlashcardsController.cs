using api.Interfaces;
using api.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace api.Controller;

[Route("api/[controller]")]
[ApiController]
public class FlashcardsController : ControllerBase
{
  private readonly IFlashcardsRepository _repo;
  public FlashcardsController(IFlashcardsRepository repo)
  {
    _repo = repo;
  }

  [Authorize]
  [HttpGet]
  public async Task<IActionResult> GetFlashcards()
  {
    return Ok(await _repo.GetFlashcards());
  }

  [Authorize]
  [HttpPost]
  public async Task<IActionResult> CreateFlashcard(CreateFlashcard createFlashcard)
  {
    var flashcard = await _repo.CreateFlashcard(createFlashcard);
    if (flashcard == null) return StatusCode(500, "Server error");
    return Ok(flashcard);
  }

  [Authorize]
  [HttpPut("{id:int}")]
  public async Task<IActionResult> EditFlashcard([FromRoute] int id, [FromBody] EditFlashcard editFlashcard)
  {
    var flashcard = await _repo.EditFlashcard(id, editFlashcard);
    if (flashcard == null) return StatusCode(500, "Server error");
    return Ok(flashcard);
  }

  [Authorize]
  [HttpDelete("{id:int}")]
  public async Task<IActionResult> DeleteFlashcard([FromRoute] int id) 
  {
    var flashcard = await _repo.DeleteFlashcard(id);
    if (flashcard == null) return StatusCode(500, "Server error");

    return Ok(flashcard);
  }
}
