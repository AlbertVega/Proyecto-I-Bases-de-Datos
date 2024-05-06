namespace LabCE.Server.Models
{
    public class Operador
    {
        public required string pNombre { get; set; }
        public required string apellidos { get; set; }
        public required string email { get; set; }
        public required string password { get; set; }
        public required int cedula { get; set; }
        public required int carnet { get; set; }
        public required string nacimiento { get; set; }
    }
}
