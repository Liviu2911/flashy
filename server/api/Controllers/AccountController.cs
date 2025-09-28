using api.Models;
using api.Dtos;
using api.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace api.Controller;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{ 
  UserManager<AppUser> _userManager;
  SignInManager<AppUser> _signInManager;
  ITokenService _tokenService;
  public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService)
  {
    _tokenService = tokenService;
    _userManager = userManager;
    _signInManager = signInManager;
  }

  [HttpPost("login")]
  public async Task<IActionResult> Login([FromBody] LoginUser loginUser)
  { 
    try {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == loginUser.Username);
      if (user == null) return Unauthorized(new { message = "User not found" });
      var res = await _signInManager.CheckPasswordSignInAsync(user, loginUser.Password, false);
      if (!res.Succeeded) return Unauthorized(new { message = "User not found"});
      return Ok(new NewUser
      {
        Email = user.Email,
        Username = user.UserName,
        Token = _tokenService.CreateToken(user)
      });
      
    } catch (Exception e)
    {
      return StatusCode(500, new { message = e.Message, trace = e.StackTrace, source = e.Source });
    }
  }

  [HttpPost("register")] 
  public async Task<IActionResult> Register([FromBody] CreateUser newUser)
  {
    try
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      var appUser = new AppUser
      {
        UserName = newUser.Username,
        Email = newUser.Email,
      };


      var result = await _userManager.CreateAsync(appUser, newUser.Password);
      if (result.Succeeded) 
      {
        var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
        if (roleResult.Succeeded) 
        {
          return Ok(new NewUser
          {
            Email = appUser.Email,
            Username = appUser.UserName,
            Token = _tokenService.CreateToken(appUser)
          });
        }
        else return StatusCode(500, roleResult.Errors);

      } else return StatusCode(500, result.Errors);
   } catch (Exception e)
   {
     return StatusCode(500, new { message = e.Message, trace = e.StackTrace, source = e.Source });
   }

  }

  [HttpPost("check")]
  [Authorize]
  public async Task<IActionResult> CheckAccount([FromBody] CheckUser user)
  {
    try {
      var res = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == user.Username);
      if (res == null) return StatusCode(500, new { ok = false });
      return Ok(new { ok = true });
    } catch(Exception e)
    {
      return BadRequest(new { message = e.Message, trace = e.StackTrace });
    }

  }

}
