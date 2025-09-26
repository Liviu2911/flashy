using api.Dtos;
using api.Models;

namespace api.Mappers;

public static class FolderMappers
{
  public static Folder FromNewFolderToFolder(NewFolder newFolder)
  {
    return new Folder 
    {
      Name = newFolder.Name
    };
  }
}
