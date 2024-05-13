const connection = require('../config/db')


function getAllProducts(req, res) {
    const sql = 'SELECT * FROM product';
    
    connection.query(sql, (err, result) => {
        console.log(result);
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }else{
        res.json(result);
      }
    });
  }

  function getProductById(req, res) {
    const id = req.params.id;
    const sql = `SELECT * FROM product WHERE product_id = ${id}`;
    
    connection.query(sql, (err, result) => {
        console.log(result);
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }else{
        res.json(result);
      }
    });
  }

module.exports = {getAllProducts,getProductById}



