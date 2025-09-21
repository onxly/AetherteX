using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/components")]
    public class ComponentsController : ControllerBase
    {
        private readonly Database1Context db;

        public ComponentsController(Database1Context context)
        {
            db = context;
        }

        public class GetCPUResponse
        {
            public int CpuId { get; set; }

            public string Name { get; set; }

            public string Brand { get; set; }

            public int Cores { get; set; }

            public int Threads { get; set; }

            public decimal ClockSpeed { get; set; }

            public int Cache { get; set; }

            public decimal BenchmarkScore { get; set; }
        }

        public class GetGPUResponse
        {
            public int GpuId { get; set; }

            public string Name { get; set; }

            public int Vram { get; set; }

            public int CoreClock { get; set; }

            public decimal BenchmarkScore { get; set; }
        }

        public class GetRAMResponse
        {
            public int RamId { get; set; }

            public string Name { get; set; }

            public int Capacity { get; set; }

            public string Type { get; set; }

            public int Speed { get; set; }

            public decimal BenchmarkScore { get; set; }
        }

        public class GetStorageResponse
        {
            public int StorageId { get; set; }

            public string Type { get; set; }

            public int Capacity { get; set; }

            public int Speed { get; set; }

            public decimal BenchmarkScore { get; set; }
        }

        // GET: AeatherAPI/components/cpu
        [HttpGet("cpu")]
        public ActionResult<List<GetCPUResponse>> GetCPUs() // Get all CPUs
        {
            var cpus = (from c in db.Cpus
                        select new GetCPUResponse
                        {
                            CpuId = c.CpuId,
                            Name = c.Name,
                            Brand = c.Brand,
                            Cores = c.Cores,
                            Threads = c.Threads,
                            ClockSpeed = c.ClockSpeed,
                            Cache = c.Cache,
                            BenchmarkScore = c.BenchmarkScore
                        }).ToList();
            return Ok(cpus);
        }

        // GET: AeatherAPI/components/gpu
        [HttpGet("gpu")]
        public ActionResult<List<GetGPUResponse>> GetGPUs() // Get all GPUs
        {
            var gpus = (from g in db.Gpus
                        select new GetGPUResponse
                        {
                            GpuId = g.GpuId,
                            Name = g.Name,
                            Vram = g.Vram,
                            CoreClock = g.CoreClock,
                            BenchmarkScore = g.BenchmarkScore
                        }).ToList();
            return Ok(gpus);
        }

        // GET: AeatherAPI/components/ram
        [HttpGet("ram")]
        public ActionResult<List<GetRAMResponse>> GetRAMs() // Get all RAMs
        {
            var rams = (from r in db.Rams
                        select new GetRAMResponse
                        {
                            RamId = r.RamId,
                            Name = r.Name,
                            Capacity = r.Capacity,
                            Type = r.Type,
                            Speed = r.Speed,
                            BenchmarkScore = r.BenchmarkScore
                        }).ToList();
            return Ok(rams);
        }

        // GET: AeatherAPI/components/storage
        [HttpGet("storage")]
        public ActionResult<List<GetStorageResponse>> GetStorages() // Get all Storage devices
        {
            var storages = (from s in db.Storages
                            select new GetStorageResponse
                            {
                                StorageId = s.StorageId,
                                Type = s.Type,
                                Capacity = s.Capacity,
                                Speed = s.Speed,
                                BenchmarkScore = s.BenchmarkScore
                            }).ToList();
            return Ok(storages);
        }

        // GET: AeatherAPI/components/cpu/{id}
        [HttpGet("cpu/{id}")]
        public ActionResult<GetCPUResponse> GetCPUById(int id) // Get CPU by ID
        {
            var cpu = db.Cpus.Find(id);
            if (cpu == null)
            {
                return NotFound("CPU not found");
            }
            var response = new GetCPUResponse
            {
                CpuId = cpu.CpuId,
                Name = cpu.Name,
                Brand = cpu.Brand,
                Cores = cpu.Cores,
                Threads = cpu.Threads,
                ClockSpeed = cpu.ClockSpeed,
                Cache = cpu.Cache,
                BenchmarkScore = cpu.BenchmarkScore
            };
            return Ok(response);
        }

        // GET: AeatherAPI/components/gpu/{id}
        [HttpGet("gpu/{id}")]
        public ActionResult<GetGPUResponse> GetGPUById(int id) // Get GPU by ID
        {
            var gpu = db.Gpus.Find(id);
            if (gpu == null)
            {
                return NotFound("GPU not found");
            }
            var response = new GetGPUResponse
            {
                GpuId = gpu.GpuId,
                Name = gpu.Name,
                Vram = gpu.Vram,
                CoreClock = gpu.CoreClock,
                BenchmarkScore = gpu.BenchmarkScore
            };
            return Ok(response);

        }

        // GET: AeatherAPI/components/ram/{id}
        [HttpGet("ram/{id}")]
        public ActionResult<GetRAMResponse> GetRAMById(int id) // Get RAM by ID
        {
            var ram = db.Rams.Find(id);
            if (ram == null)
            {
                return NotFound("RAM not found");
            }
            var response = new GetRAMResponse
            {
                RamId = ram.RamId,
                Name = ram.Name,
                Capacity = ram.Capacity,
                Type = ram.Type,
                Speed = ram.Speed,
                BenchmarkScore = ram.BenchmarkScore
            };
            return Ok(response);
        }

        // GET: AeatherAPI/components/storage/{id}
        [HttpGet("storage/{id}")]
        public ActionResult<GetStorageResponse> GetStorageById(int id) // Get Storage by ID
        {
            var storage = db.Storages.Find(id);
            if (storage == null)
            {
                return NotFound("Storage not found");
            }
            var response = new GetStorageResponse
            {
                StorageId = storage.StorageId,
                Type = storage.Type,
                Capacity = storage.Capacity,
                Speed = storage.Speed,
                BenchmarkScore = storage.BenchmarkScore
            };
            return Ok(response);
        }
    }
}