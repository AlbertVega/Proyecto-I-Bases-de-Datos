namespace LabCE.Server.Models
{
    public class LABORATORIO
    {
        public string id_lab { get; set; }
        public int capacidad { get; set; }
        public int cantidad_pcs { get; set; }
        public bool reservado { get; set; } 
        public ICollection<ACTIVO> ACTIVO { get; } = new List<ACTIVO>();
    }
}
