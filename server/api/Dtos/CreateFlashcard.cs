using System.ComponentModel.DataAnnotations;

namespace api.Dtos;

public class CreateFlashcard
{
  [Required]
  public string? Front { get; set; }
  [Required]
  public string? Back { get; set; }
  [Required]
  public int FolderId { get; set; }
}
