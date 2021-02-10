using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Bankroll_API.Models
{
    public class UsersContext : DbContext
    {
        public UsersContext (DbContextOptions<UsersContext> options)
            : base(options)
        {
        }

        public DbSet<Bankroll_API.Models.Users> Users { get; set; }
    }
}
