using Microsoft.EntityFrameworkCore;

namespace LabCE.Server.Models
{
    public class LabCE_DB_Context : DbContext
    {
        public DbSet<OPERADOR> OPERADOR {  get; set; }

        public LabCE_DB_Context(DbContextOptions options) : base(options)
        {
            
        }
    }
}
