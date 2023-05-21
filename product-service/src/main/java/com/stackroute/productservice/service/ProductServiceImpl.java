package com.stackroute.productservice.service;

import com.stackroute.productservice.domain.Product;
import com.stackroute.productservice.domain.ProductDTO;
import com.stackroute.productservice.domain.ProductWithSellerDTO;
import com.stackroute.productservice.domain.User;
import com.stackroute.productservice.repository.ProductRepository;
import com.stackroute.productservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    // save a product
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

    // save an array of products
    @Override
    public List<Product> addNewProducts(List<ProductDTO> productDTOList) {
        List<Product> newProducts = new ArrayList<>();

        for (ProductDTO productDTO : productDTOList) {
            Product product = new Product();
            product.setName(productDTO.getName());
            product.setTitle(productDTO.getTitle());
            product.setDescription(productDTO.getDescription());
            product.setImage(productDTO.getImage());
            product.setCategory(productDTO.getCategory());
            product.setPrice(productDTO.getPrice());
            product.setAgeInDays(productDTO.getAgeInDays());
            product.setCondition(productDTO.getCondition());

            Product newProduct = productRepository.save(product);

            userRepository.createOwnsRelationship(productDTO.getEmail(), newProduct.getId());

            newProducts.add(newProduct);
        }

        return newProducts;
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
    public List<Product> getAllProductsWithSeller() {
        List<ProductWithSellerDTO> result = productRepository.findAllWithSeller();
        List<Product> products = new ArrayList<>();

        System.out.println(result);
        System.out.println(productRepository.findAllWithSeller());

        for (ProductWithSellerDTO dto : result) {
            Product product = dto.getProduct();
            User seller = dto.getSeller();

            if (product != null) {
                product.setSeller(seller);
                products.add(product);
            }
        }

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
