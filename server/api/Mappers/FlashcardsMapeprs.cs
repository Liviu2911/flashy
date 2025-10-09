using api.Models;
using api.Dtos;

namespace api.Mappers;

public static class FlashcardsMappers
{
  public static Flashcard FromCreateFlashcardToFlashcard(CreateFlashcard createFlashcard)
  {
    return new Flashcard
    {
      Front = createFlashcard.Front,
      Back = createFlashcard.Back,
      FolderId = createFlashcard.FolderId,
    };
  }
}
