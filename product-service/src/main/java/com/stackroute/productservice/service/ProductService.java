package com.stackroute.productservice.service;

import com.stackroute.productservice.domain.Product;
import com.stackroute.productservice.domain.ProductDTO;
import com.stackroute.productservice.domain.User;

import java.util.List;

public interface ProductService {
    public Product addNewProduct(ProductDTO productDTO);
    public List<Product> addNewProducts(List<ProductDTO> productDTOList);
    public User addNewUser(User user);
    public List<Product> getAllProducts();
    public List<Product> getAllProductsWithSeller();
    public List<Product> getProductsByName(String name);
    public List<Product> getProductsForUser(String email);
    public Product deleteProductById(Long id);
    public User deleteUserByEmail(String email);
}
