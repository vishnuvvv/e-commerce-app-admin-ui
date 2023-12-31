import React, { useState } from "react";
import "./NewProduct.css";
import { Publish } from "@mui/icons-material";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../config/firebase";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);
  const [cat, setCat] = useState([]);
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);
  console.log(cat);
  console.log(image);
  console.log(colors);

  const handleCategories = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleColors = (e) => {
    setColors(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + image.name;
    console.log(fileName);
    const storage = getStorage(app);
    console.log(storage);

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            color: colors,
            size,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="new-product">
      <form className="user-updat-form">
        <div className="user-update-left">
          <div className="user-updat-left-item">
            <lable className="user-update-label">Title</lable>
            <input
              onChange={handleChange}
              type="text"
              placeholder="apple airpod"
              className="user-update-input"
              name="title"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Price</lable>
            <input
              onChange={handleChange}
              type="text"
              placeholder="ex:100"
              className="user-update-input"
              name="price"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Description</lable>
            <input
              onChange={handleChange}
              type="text"
              placeholder="description"
              className="user-update-input"
              name="desc"
            />
          </div>

          <div className="user-updat-left-item">
            <lable className="user-update-label">Categories</lable>
            <input
              onChange={handleCategories}
              type="text"
              placeholder="add`,`after each cat ex:jeans,pants,shirts"
              className="user-update-input"
              name="categories"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Colors (use hex code)</lable>
            <input
              onChange={handleColors}
              type="text"
              placeholder="add`,`after each color ex:black,red,blue"
              className="user-update-input"
              name="color"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Size</lable>
            <input
              onChange={handleSize}
              type="text"
              placeholder="add`,`after each color ex:X,XL,M,L,S"
              className="user-update-input"
              name="size"
            />
          </div>

          <div className="user-updat-left-item">
            <lable>Stock</lable>
            <select name="instock" onChange={handleChange}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <div className="user-update-right">
          <div className="user-update-upload">
            <img
              src="https://img.favpng.com/5/16/10/clip-art-product-computer-icons-avatar-logo-png-favpng-b7TLrYx6Uqp661BrMRmvzWdZY.jpg"
              alt=""
              className="user-upload-image"
            />
            <label htmlFor="file">
              <Publish className="use-update-icon-right" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <button className="user-update-btn-right" onClick={handleSubmit}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
