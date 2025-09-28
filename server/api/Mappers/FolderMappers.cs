using api.Dtos;
using api.Models;

namespace api.Mappers;

public static class FolderMappers
{
  public static Folder FromCreateFolderToFolder(NewFolder createFolder)
  {
    return new Folder 
    {
      Name = createFolder.Name,
      User = createFolder.User
    };
  }
}
