using System.Web.Mvc;

namespace JsUnitTesting.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index(string arg1, string arg2)
        {
            int argOne, argTwo;
            bool arg1Success = int.TryParse(arg1, out argOne);
            bool arg2Success = int.TryParse(arg2, out argTwo);
            if (arg1Success && arg2Success)
            {
                return Json(argOne + argTwo, JsonRequestBehavior.AllowGet);
            }
            return Json("invalid input", JsonRequestBehavior.AllowGet);
        }

    }
}
