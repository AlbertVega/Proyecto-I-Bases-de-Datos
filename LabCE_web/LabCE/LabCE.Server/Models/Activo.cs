namespace LabCE.Server.Models
{
    public class ACTIVO
    {
        public string tipo { get; set; }
        public string marca { get; set; }
        public DateOnly fecha_compra { get; set; }
        public int placa { get; set; }
        public string id_lab_fk { get; set; }
        public LABORATORIO LABORATORIO { get; set; }
        public int cedula_fk { get; set; }
        public PROFESOR? PROFESOR { get; set; }
    }
}
