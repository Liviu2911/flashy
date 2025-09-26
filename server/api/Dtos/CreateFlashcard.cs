using System.ComponentModel.DataAnnotations;
using api.Models;

namespace api.Dtos;

public class CreateFlashcard
{
  [Required]
  public string? Front { get; set; }
  [Required]
  public string? Back { get; set; }
  public Folder? Folder { get; set; }
}
