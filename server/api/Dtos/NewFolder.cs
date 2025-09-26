using System.ComponentModel.DataAnnotations;

namespace api.Dtos;

public class NewFolder
{
  [Required]
  public string? Name { get; set; }

  [Required]
  public string? User { get; set; }
}
