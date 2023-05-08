package com.stackroute.productservice.service;

import com.stackroute.productservice.domain.Product;
import com.stackroute.productservice.domain.ProductDTO;
import com.stackroute.productservice.domain.User;

import java.util.List;

public interface ProductService {
    public Product addNewProduct(ProductDTO productDTO);
    public User addNewUser(User user);
    public List<Product> getAllProducts();
    public List<Product> getProductsByName(String name);
    public Product deleteProductById(Long id);
    public User deleteUserByEmail(String email);
}
