using api.Models;
using api.Dtos;

namespace api.Interfaces;

public interface IFlashcardsRepository
{
  public Task<List<Flashcard>> GetFlashcards();
  public Task<Flashcard> CreateFlashcard(CreateFlashcard createFlashcard);
  public Task<Flashcard?> EditFlashcard(int id, EditFlashcard editFlashcard);
  public Task<Flashcard?> DeleteFlashcard(int id);
}
