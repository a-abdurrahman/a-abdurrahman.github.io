import "../../../styles/products.css";
import sidebar from "../sidebar";

const Products = {
  async renderPage() {
    return `<div class="dashboard">
${sidebar}
    <main class="main-content">
      <header class="header">
        <h2>Inventory Management</h2>
        <div class="user-info">
          <img src="avatar.png" alt="User Avatar" class="avatar">
          <span class="username">John Doe</span>
        </div>
      </header>
      <section class="inventory-table">
        <h3>Current Inventory</h3>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product A</td>
              <td>Electronics</td>
              <td>500</td>
              <td>$25</td>
              <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Product B</td>
              <td>Furniture</td>
              <td>300</td>
              <td>$45</td>
              <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Product C</td>
              <td>Clothing</td>
              <td>1,000</td>
              <td>$15</td>
              <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="add-item">
        <h3>Add New Item</h3>
        <form>
          <div class="form-group">
            <label for="item-name">Item Name</label>
            <input type="text" id="item-name" placeholder="Enter item name">
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <input type="text" id="category" placeholder="Enter category">
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input type="number" id="stock" placeholder="Enter stock quantity">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" id="price" placeholder="Enter price">
          </div>
          <button type="submit" class="add-btn">Add Item</button>
        </form>
      </section>
    </main>
  </div>`;
  },
  async afterRenderPage() {
    const loginContainer = document.querySelector(".login-container");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
  },
};

export default Products;
