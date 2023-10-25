import React, { useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);


  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 240 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-user">
            <img className="product-list-imag" src={params.row.img} alt="pic" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "instock", headerName: "Stock", width: 250 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="product-list-edit">Edit</button>
            </Link>

            <DeleteOutline
              className="product-list-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className="product-list">
      <DataGrid
        rows={products}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        getRowId={(row) => row._id}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
