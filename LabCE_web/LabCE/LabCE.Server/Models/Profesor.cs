namespace LabCE.Server.Models
{
    public class PROFESOR
    {
        public required string nombre { get; set; }
        public required string apellido1 { get; set; }
        public required string apellido2 { get; set; }
        public required bool es_admin { get; set; }
        public required string email { get; set; }
        public required byte[] p_password { get; set; }
        public required int cedula { get; set; }
        public required DateTime fecha_nacimiento { get; set; }
        public ACTIVO? ACTIVO { get; set; }
    }
}
