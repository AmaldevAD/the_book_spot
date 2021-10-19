using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreBackend.Models
{
  public class categories
  {
    public int categoryId { get; set; }
    public string categoryName  { get; set; }
    public string description { get; set; }
    public string image { get; set; }
    public bool status { get; set; }
    public int position { get; set; }
    public string createdAt { get; set; }



  }
}

