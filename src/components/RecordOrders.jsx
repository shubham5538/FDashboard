import React from 'react';

const ProductCellData = [
  {
    id: '1',
    product_id: "1236",
    Product_name: "Abstract 3D",
    Stock: "32 in stock",
    price: "$45.99",
    Total_sales: "20",
    Order_Status: "confirmed",
  },
  {
    id: '2',
    product_id: "7654",
    Product_name: "Sarphens illustration",
    Stock: "32 in stock",
    price: "$45.99",
    Total_sales: "20",
    Order_Status: "Placed",
  },
  {
    id: '3',
    product_id: "2546",
    Product_name: "Shubham illustration",
    Stock: "45 in stock",
    price: "$4.99",
    Total_sales: "2",
    Order_Status: "Confirmed",
  },
  {
    id: '4',
    product_id: "7654",
    Product_name: "Sarphens illustration",
    Stock: "01 in stock",
    price: "$500.99",
    Total_sales: "20",
    Order_Status: "confirmed",
  },
  {
    id: '5',
    product_id: "5463",
    Product_name: "Sarphens illustration",
    Stock: "32 in stock",
    price: "$45.99",
    Total_sales: "20",
    Order_Status: "Placed",
  }
];

function RecordProduct() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Product Sell</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {ProductCellData.map((product) => (
              <tr key={product.id}>
                <td>
                  {product.Product_name}
                  <span className='flex flex-col text-gray-400'>
                    lorem ipsum dolar sit amet
                  </span>
                </td>
                <td>{product.Stock}</td>
                <td>{product.price}</td>
                <td>{product.Total_sales}</td>
                <td style={{ color: getOrderStatusColor(product.Order_Status) }}>
                  {product.Order_Status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Function to assign different colors to Order Status
function getOrderStatusColor(orderStatus) {
  switch (orderStatus) {
    case "confirmed":
      return "green"; // Change to your desired color
    case "Placed":
      return "blue"; // Change to your desired color
    default:
      return "black"; // Default color
  }
}

export default RecordProduct;
