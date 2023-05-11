package com.stackroute.productservice.service;

import com.stackroute.productservice.domain.Product;
import com.stackroute.productservice.domain.ProductDTO;
import com.stackroute.productservice.domain.User;
import com.stackroute.productservice.repository.ProductRepository;
import com.stackroute.productservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;


    @Override
    public Product addNewProduct(ProductDTO productDTO) {
        Product product1 = new Product();
        product1.setName(productDTO.getName());
        product1.setTitle(productDTO.getTitle());
        product1.setDescription(productDTO.getDescription());
        product1.setImage(productDTO.getImage());
        product1.setCategory(productDTO.getCategory());
        product1.setPrice(productDTO.getPrice());
        product1.setAgeInDays(productDTO.getAgeInDays());
        product1.setCondition(productDTO.getCondition());

        Product newProduct = productRepository.save(product1);

        userRepository.createOwnsRelationship(productDTO.getEmail(), newProduct.getId());

        return newProduct;
    }

    @Override
    public User addNewUser(User user) {
        User user1 = userRepository.save(user);

        return user1;
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();

        return products;
    }

    @Override
    public List<Product> getProductsByName(String name) {
        List<Product> products = productRepository.searchProduct(name);

        return products;
    }

    @Override
    public Product deleteProductById(Long id) {
        return productRepository.deleteProductById(id);
    }

    @Override
    public User deleteUserByEmail(String email) {
        return userRepository.deleteUserByEmail(email);
    }
}