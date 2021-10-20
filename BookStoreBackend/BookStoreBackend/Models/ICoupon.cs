using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace BookStoreBackend.Models


{
  interface ICoupon
  {
    List<Coupon> GetAllCoupon();
    void AddCoupon(Coupon coupon);
    void DeleteCoupon(int Id);

  } 
}
