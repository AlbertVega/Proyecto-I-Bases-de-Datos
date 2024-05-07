using Microsoft.EntityFrameworkCore;

namespace LabCE.Server.Models
{
    public class LabCE_DB_Context : DbContext
    {
        public DbSet<OPERADOR> OPERADOR { get; set; }
        public DbSet<PROFESOR> PROFESOR { get; set; }
        public DbSet<ACTIVO> ACTIVO { get; set; }
        public DbSet<LABORATORIO> LABORATORIO { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OPERADOR>().HasKey(op => op.cedula);
            modelBuilder.Entity<PROFESOR>().HasKey(p => p.cedula);
            modelBuilder.Entity<ACTIVO>().HasKey(a => a.placa);
            modelBuilder.Entity<LABORATORIO>().HasKey(l => l.id_lab);

            modelBuilder.Entity<PROFESOR>()
            .HasOne(e => e.ACTIVO)
            .WithOne(e => e.PROFESOR)
            .HasForeignKey<ACTIVO>(e => e.cedula_fk)
            .IsRequired(false);

            modelBuilder.Entity<LABORATORIO>()
                .HasMany(e => e.ACTIVO)
                .WithOne(e => e.LABORATORIO)
                .HasForeignKey(e => e.id_lab_fk)
                .IsRequired();
        }

        public LabCE_DB_Context(DbContextOptions options) : base(options)
        {

        }
    }
}
