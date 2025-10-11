using api.Models;
using api.Dtos;

namespace api.Interfaces;

public interface IFoldersRepository
{
  public Task<List<FolderDto>> GetFolders(string username);
  public Task<Folder> CreateFolder(NewFolder newFolder);
  public Task<Folder?> EditFolder(int id, string newName);
  public Task<Folder?> DeleteFolder(int id);
}
