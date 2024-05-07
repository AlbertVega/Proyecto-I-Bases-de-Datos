namespace LabCE.Server.Models
{
    public class PROFESOR
    {
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public bool es_admin { get; set; }
        public string email { get; set; }
        public byte[] p_password { get; set; }
        public int cedula { get; set; }
        public DateOnly fecha_nacimiento { get; set; }
        public ACTIVO? ACTIVO { get; set; }
    }
}
