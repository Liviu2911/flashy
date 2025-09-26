namespace api.Models;

public class Folder
{
  public int Id { get; set; }
  public string? Name { get; set; }
  public string? User { get; set; }
  public Flashcard[]? Flashcards { get; set; }
}
