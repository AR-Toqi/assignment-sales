const express= require('express')
const router=express.Router();
const {
    getTotalRevenue,
    getQuantityByProduct,
    getTopProducts,
    getAveragePrice,
    getRevenueByMonth,
    getHighestQuantitySold,
    getDepartmentSalaryExpense

}= require('../controller/salesController')



// api end points implementation
router.get('/sales/total-revenue',getTotalRevenue);

router.get('/sales/quantity-by-product',getQuantityByProduct);

router.get('/sales/top-products',getTopProducts);

router.get('/sales/average-price',getAveragePrice);

router.get('/sales/revenue-by-month',getRevenueByMonth);

router.get('/sales/highest-quantity-sold',getHighestQuantitySold);

router.get('/sales/department-salary-expense',getDepartmentSalaryExpense);


module.exports=router;