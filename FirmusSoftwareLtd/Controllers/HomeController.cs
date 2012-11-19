using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.ServiceModel.Syndication;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace FirmusSoftwareLtd.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
             return View();
        }

        public ActionResult Stp()
        {
            return View();

        }

        public PartialViewResult Partial()
        {
            return PartialView();
        }

        public ActionResult Windows8()
        {
            return View();
            
        }

        [Authorize]
        public ActionResult Research()
        {

            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create("http://blog.firmus-software.co.uk/syndication.axd");
            
            using (WebResponse response = request.GetResponse())
            {
                using (var reader = new XmlTextReader(response.GetResponseStream()))
                {
                    Rss20FeedFormatter rssFeed = new Rss20FeedFormatter();
                    rssFeed.ReadFrom(reader);
                    return View(rssFeed.Feed);
                }
            }
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
