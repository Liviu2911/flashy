using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using api.Data;
using api.Models;
using api.Service;
using api.Interfaces;
using api.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<FlashyDbContext>(opts => opts.UseNpgsql(connectionString));
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IFoldersRepository, FoldersRepository>();
builder.Services.AddScoped<IFlashcardsRepository, FlashcardsRepository>();

builder.Services.AddIdentity<AppUser, IdentityRole>(options => {
  options.Password.RequireDigit = true;
  options.Password.RequireUppercase = true;
  options.Password.RequireLowercase = true;
  options.Password.RequireNonAlphanumeric = true;
  options.Password.RequiredLength = 6;
}).AddEntityFrameworkStores<FlashyDbContext>();

builder.Services.AddAuthentication(options => {
  options.DefaultScheme = 
  options.DefaultAuthenticateScheme = 
  options.DefaultSignInScheme = 
  options.DefaultSignOutScheme = 
  options.DefaultForbidScheme = 
  options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
  options.TokenValidationParameters = new TokenValidationParameters()
  {
    ValidateIssuer = true,
    ValidIssuer = builder.Configuration["JWT:Issuer"],
    ValidateAudience = true,
    ValidAudience = builder.Configuration["JWT:Audience"],
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(
      System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWT:SigningKey"])
    )
  };
});

builder.Services.AddCors(options => 
{
  options.AddPolicy("AllowFrontend", policy => 
  {
    policy.WithOrigins("http://localhost:5173")
      .AllowAnyHeader()
      .AllowAnyMethod();
  });
});

var app = builder.Build();
app.UseCors("AllowFrontend");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.Run();
