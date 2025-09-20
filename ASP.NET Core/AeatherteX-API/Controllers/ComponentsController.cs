using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

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

        // GET: AeatherAPI/components/cpu/{id}
        [HttpGet("cpu/{id}")]
        public ActionResult<Cpu> GetCPUById(int id) // Get CPU by ID
        {
            var cpu = db.Cpus.Find(id);
            if (cpu == null)
            {
                return StatusCode(1, "CPU not found");
            }
            return StatusCode(0, cpu);
        }

        // GET: AeatherAPI/components/gpu/{id}
        [HttpGet("gpu/{id}")]
        public ActionResult<Gpu> GetGPUById(int id) // Get GPU by ID
        {
            var gpu = db.Gpus.Find(id);
            if (gpu == null)
            {
                return StatusCode(1, "GPU not found");
            }
            return StatusCode(0, gpu);
        }

        // GET: AeatherAPI/components/ram/{id}
        [HttpGet("ram/{id}")]
        public ActionResult<Ram> GetRAMById(int id) // Get RAM by ID
        {
            var ram = db.Rams.Find(id);
            if (ram == null)
            {
                return StatusCode(1, "RAM not found");
            }
            return StatusCode(0, ram);
        }

        // GET: AeatherAPI/components/storage/{id}
        [HttpGet("storage/{id}")]
        public ActionResult<Storage> GetStorageById(int id) // Get Storage by ID
        {
            var storage = db.Storages.Find(id);
            if (storage == null)
            {
                return StatusCode(1, "Storage not found");
            }
            return StatusCode(0, storage);
        }
    }
}