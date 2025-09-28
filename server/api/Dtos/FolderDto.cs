namespace api.Dtos;

public class FolderDto
{
  public int Id { get; set; }
  public string? User { get; set; }
  public List<FlashcardDto>? Flashcards { get; set; }
  public string? Name { get; set; }
}
