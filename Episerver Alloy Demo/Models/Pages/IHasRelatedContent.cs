using EPiServer.Core;

namespace Episerver_Alloy_Demo.Models.Pages
{
    public interface IHasRelatedContent
    {
        ContentArea RelatedContentArea { get; }
    }
}
