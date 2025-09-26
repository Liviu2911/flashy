namespace api.Models;

public class Flashcard
{
  public int Id { get; set; }
  public string? Front { get; set; }
  public string? Back { get; set; }
  public Folder? Folder { get; set; }
}
