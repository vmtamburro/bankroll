using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bankroll_API.Models
{
  public class Users
  {
    public int Id { get; set; }

    public DateTime DateCreated { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }
  }
}
