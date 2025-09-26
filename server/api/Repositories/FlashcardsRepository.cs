using api.Interfaces;
using api.Models;
using api.Dtos;
using api.Data;
using static api.Mappers.FlashcardsMappers;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories;

public class FlashcardsRepository : IFlashcardsRepository
{
  private readonly FlashyDbContext _context; 
  public FlashcardsRepository(FlashyDbContext context)
  {
    _context = context;
  }

  public async Task<List<Flashcard>> GetFlashcards()
  {
    var flashcards = await _context.Flashcards.ToListAsync();
    return flashcards;
  }

  public async Task<Flashcard> CreateFlashcard(CreateFlashcard createFlashcard)
  {
    var flashcard = FromCreateFlashcardToFlashcard(createFlashcard);

    await _context.Flashcards.AddAsync(flashcard);
    await _context.SaveChangesAsync();

    return flashcard;
  }

  public async Task<Flashcard?> EditFlashcard(int id, EditFlashcard editFlashcard)
  {
    var flashcard = await _context.Flashcards.FindAsync(id);
    if (flashcard == null) return null;
    flashcard.Front = editFlashcard.Front;
    flashcard.Back = editFlashcard.Back;
    flashcard.Folder = editFlashcard.Folder;

    await _context.SaveChangesAsync();
    return flashcard;
  }

  public async Task<Flashcard?> DeleteFlashcard(int id)
  {
    var flashcard = await _context.Flashcards.FindAsync(id);
    if (flashcard == null) return null;
    _context.Flashcards.Remove(flashcard);
    await _context.SaveChangesAsync();
    return flashcard;
  }
}
