using System.ComponentModel.DataAnnotations;

namespace api.Dtos;

public class CreateUser
{
  [Required]
  public string? Username { get; set; } 
  [Required]
  [EmailAddress]
  public string? Email { get; set; } 
  [Required]
  public string? Password { get; set; } 
}
