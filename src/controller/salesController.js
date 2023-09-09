const Sales=require('../model/salesModel')


// GET /api/sales/total-revenue
exports.getTotalRevenue = async (req, res) => {
    try {
      const totalRevenue = await Sales.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
          },
        },
      ]);
      res.json(totalRevenue[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // GET /api/sales/quantity-by-product
  exports.getQuantityByProduct = async (req, res) => {
    try {
      const quantityByProduct = await Sales.aggregate([
        {
          $group: {
            _id: '$product',
            totalQuantity: { $sum: '$quantity' },
          },
        },
      ]);
      res.json(quantityByProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // GET /api/sales/top-products
  exports.getTopProducts = async (req, res) => {
    try {
      const topProducts = await Sales.aggregate([
        {
          $group: {
            _id: '$product',
            totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
          },
        },
        { $sort: { totalRevenue: -1 } },
        { $limit: 5 },
      ]);
      res.json(topProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // GET /api/sales/average-price
  exports.getAveragePrice = async (req, res) => {
    try {
      const averagePrice = await Sales.aggregate([
        {
          $group: {
            _id: null,
            averagePrice: { $avg: '$price' },
          },
        },
      ]);
      res.json(averagePrice[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // GET /api/sales/revenue-by-month
  exports.getRevenueByMonth = async (req, res) => {
    try {
      const revenueByMonth = await Sales.aggregate([
        {
          $group: {
            _id: {
              year: { $year: '$date' },
              month: { $month: '$date' },
            },
            totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
          },
        },
      ]);
      res.json(revenueByMonth);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // GET /api/sales/highest-quantity-sold
  exports.getHighestQuantitySold = async (req, res) => {
    try {
      const highestQuantitySold = await Sales.aggregate([
        {
          $group: {
            _id: '$product',
            maxQuantity: { $max: '$quantity' },
          },
        },
        { $sort: { maxQuantity: -1 } },
        { $limit: 1 },
      ]);
      res.json(highestQuantitySold[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // GET /api/sales/department-salary-expense
  exports.getDepartmentSalaryExpense = async (req, res) => {
    try {
      const departmentSalaryExpense = await Sales.aggregate([
        {
          $group: {
            _id: '$department',
            totalSalaryExpense: { $sum: '$salary' },
          },
        },
      ]);
      res.json(departmentSalaryExpense);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };