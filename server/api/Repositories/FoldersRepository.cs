using api.Data;
using api.Dtos;
using api.Models;
using static api.Mappers.FolderMappers;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories;

public class FoldersRepository : IFoldersRepository
{
  private readonly FlashyDbContext _context;
  public FoldersRepository(FlashyDbContext context)
  {
    _context = context;
  }

  public async Task<List<FolderDto>> GetFolders(string username)
  {
    var folders = await _context.Folders.Where(f => f.User == username)
      .Include(f => f.Flashcards)
      .Select(f => new FolderDto 
          {
            Id = f.Id,
            Name = f.Name,
            User = f.User,
            Flashcards = f.Flashcards.Select(fl => new FlashcardDto { Id = fl.Id, Front = fl.Front, Back = fl.Back, FolderId = fl.FolderId }).ToList()
          })
      .ToListAsync();
    return folders;
  }

  public async Task<Folder> CreateFolder(NewFolder newFolder)
  {
    var folder = FromCreateFolderToFolder(newFolder);
    await _context.Folders.AddAsync(folder);
    await _context.SaveChangesAsync();

    return folder;
  }

  public async Task<Folder?> EditFolder(int id, string newName)
  {
    var folder = await _context.Folders.FindAsync(id);
    if (folder == null) return null;
    folder.Name = newName;
    await _context.SaveChangesAsync();

    return folder;
  }

  public async Task<Folder?> DeleteFolder(int id)
  {
    var folder = await _context.Folders.FindAsync(id);
    if (folder == null) return null;

    _context.Remove(folder);
    await _context.SaveChangesAsync();

    return folder;
  }
}
