const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");

const app = express();
app.use(express.json());

// Kết nối tới MongoDB (chỉnh sửa connection string nếu cần)
mongoose.connect("mongodb://localhost:27017/slug-example", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// Sử dụng route cho sản phẩm
app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
