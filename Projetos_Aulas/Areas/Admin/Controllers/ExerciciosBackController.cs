using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Projetos_Aulas.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ExerciciosBack : Controller
    {
        private readonly ILogger<ExerciciosBack> _logger;

        public ExerciciosBack(ILogger<ExerciciosBack> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}