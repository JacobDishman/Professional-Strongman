using Microsoft.AspNetCore.Mvc;

namespace Professional_Strongman.Controllers
{
    // controller for the main pages
    public class HomeController : Controller
    {
        // home page with all the strongman info
        public IActionResult Index()
        {
            return View();
        }

        // calculator page for tutoring rates
        public IActionResult Calculator()
        {
            return View();
        }
    }
}
