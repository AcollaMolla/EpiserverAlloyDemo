using System.Collections.Generic;
using EPiServer.Core;
using Episerver_Alloy_Demo.Models.Pages;

namespace Episerver_Alloy_Demo.Models.ViewModels
{
    public class PreviewModel : PageViewModel<SitePageData>
    {
        public PreviewModel(SitePageData currentPage, IContent previewContent)
            : base(currentPage)
        {
            PreviewContent = previewContent;
            Areas = new List<PreviewArea>();
        }

        public IContent PreviewContent { get; set; }
        public List<PreviewArea> Areas { get; set; }

        public class PreviewArea
        {
            public bool Supported { get; set; }
            public string AreaName { get; set; }
            public string AreaTag { get; set; }
            public ContentArea ContentArea { get; set; }
        }
    }
}
