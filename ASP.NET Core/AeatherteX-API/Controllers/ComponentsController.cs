using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;
using static AeatherteX_API.Controllers.OrdersController;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/components")]
    public class ComponentsController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        // GET: AeatherAPI/components/cpu
        [HttpGet("cpu")]
        public ActionResult<List<Cpu>> GetCPUs() // Get all CPUs
        {
            var cpus = (from c in db.Cpus
                        select c).ToList();
            return StatusCode(0, cpus);

        }

        // GET: AeatherAPI/components/gpu
        [HttpGet("gpu")]
        public ActionResult<List<Gpu>> GetGPUs() // Get all GPUs
        {
            var gpus = (from g in db.Gpus
                        select g).ToList();
            return StatusCode(0, gpus);
        }

        // GET: AeatherAPI/components/ram
        [HttpGet("ram")]
        public ActionResult<List<Ram>> GetRAMs() // Get all RAMs
        {
            var rams = (from r in db.Rams
                        select r).ToList();
            return StatusCode(0, rams);
        }

        // GET: AeatherAPI/components/storage
        [HttpGet("storage")]
        public ActionResult<List<Storage>> GetStorages() // Get all Storage devices
        {
            var storages = (from s in db.Storages
                            select s).ToList();
            return StatusCode(0, storages);
        }
    }
}
