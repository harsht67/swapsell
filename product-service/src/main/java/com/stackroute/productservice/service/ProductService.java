package com.stackroute.productservice.service;

import com.stackroute.productservice.domain.Product;
import com.stackroute.productservice.domain.ProductDTO;

import java.util.List;

public interface ProductService {
    public Product addNewProduct(ProductDTO productDTO);
    public List<Product> getAllProducts();
}
