using Microsoft.EntityFrameworkCore;

namespace LabCE.Server.Models
{
    public class LabCE_DB_Context : DbContext
    {
        public DbSet<OPERADOR> OPERADOR {  get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OPERADOR>().HasKey(op => op.cedula);
        }

        public LabCE_DB_Context(DbContextOptions options) : base(options)
        {
            
        }
    }
}
