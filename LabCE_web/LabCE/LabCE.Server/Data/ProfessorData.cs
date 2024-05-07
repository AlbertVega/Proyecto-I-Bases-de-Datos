using LabCE.Server.Data;
using LabCE.Server.Models;

namespace LabCE.Server.Data
{
    public class PROFESSORINFO
    {
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public int cedula { get; set; }
        public DateOnly fecha_nacimiento { get; set; }
        public string email { get; set; }
        public int profesor_id { get; set; }
        public int edad { get; set; }
    }        

    public class ProfessorData
    {
        private readonly LabCE_DB_Context _dbContext;
        private PROFESOR professor = new PROFESOR();

        public ProfessorData(LabCE_DB_Context context)
        {
            _dbContext = context;
        }

        public async Task<List<PROFESSORINFO>> GetProfessors()
        {
            try
            {
            var professors = _dbContext.PROFESOR
                .Select(p => new PROFESSORINFO
                {
                    nombre = p.nombre,
                    apellido1 = p.apellido1,
                    apellido2 = p.apellido2,
                    cedula = p.cedula,
                    fecha_nacimiento = p.fecha_nacimiento,
                    email = p.email,
                    edad = DateTime.Now.Year - p.fecha_nacimiento.Year
                }).ToList();

            return professors;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }
    }
}
