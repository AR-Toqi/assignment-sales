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

router.get('/sales/total-revenue',getQuantityByProduct);

router.get('/sales/total-revenue',getTopProducts);

router.get('/sales/total-revenue',getAveragePrice);

router.get('/sales/total-revenue',getRevenueByMonth);

router.get('/sales/total-revenue',getHighestQuantitySold);

router.get('/sales/total-revenue',getDepartmentSalaryExpense);


module.exports=router;