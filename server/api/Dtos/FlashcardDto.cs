namespace api.Dtos;

public class FlashcardDto
{
  public int Id { get; set; }
  public string? Front { get; set; }
  public string? Back { get; set; }
  public int? FolderId { get; set; }
}
