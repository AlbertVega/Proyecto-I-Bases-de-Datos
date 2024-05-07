using LabCE.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace LabCE.Server.Data
{
    public class OPERATORINFO
    {
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public int carnet { get; set; }
        public int cedula { get; set; }
        public DateOnly fecha_nacimiento { get; set; }
        public string email { get; set; }
        public int edad { get; set; }
    }

    public class OperatorAproved
    {
        public int cedula { get; set; }
        public bool aprobado { get; set; }
    }
    
public class OperatorData
    {
        private readonly LabCE_DB_Context _dbContext;
        private OPERADOR operador = new OPERADOR();

        public OperatorData(LabCE_DB_Context context)
        {
            _dbContext = context;
        }

        public async Task<List<OPERATORINFO>> GetOperators()
        {
            try
            {
                var operators = _dbContext.OPERADOR.Where(op => op.aprobado == false)
                    .Select(op => new OPERATORINFO
                    {
                        nombre = op.nombre,
                        apellido1 = op.apellido1,
                        apellido2 = op.apellido2,
                        carnet = op.carnet,
                        cedula = op.cedula,
                        fecha_nacimiento = op.fecha_nacimiento,
                        email = op.email,
                        edad = DateTime.Now.Year - op.fecha_nacimiento.Year
                    }).ToList();

                return operators;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        public async Task<bool> SetOperator(OperatorAproved op)
        {
            try
            {
                var operatorToUpdate = _dbContext.OPERADOR.First(o => o.cedula == op.cedula);
                if (operatorToUpdate != null)
                {
                    operatorToUpdate.aprobado = op.aprobado;
                    await _dbContext.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
        }
    }
}
