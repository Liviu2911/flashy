using System.ComponentModel.DataAnnotations;

namespace api.Dtos;

public class EditFolder
{
  [Required]
  public string? Name { get; set; }
}
