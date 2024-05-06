namespace LabCE.Server.Models
{
    public class OPERADOR_DTO
    {
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public int carnet { get; set; }
        public bool aprobado { get; set; }
        public string email { get; set; }
        public string op_password { get; set; }
        public int cedula { get; set; }
        public DateTime nacimiento { get; set; }
    }
}
