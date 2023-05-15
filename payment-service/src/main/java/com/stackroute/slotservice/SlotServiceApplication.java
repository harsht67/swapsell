package com.stackroute.slotservice;

import com.stackroute.slotservice.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SlotServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SlotServiceApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<JwtFilter> filterRegistrationBean(){
		FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/userAuth/*");
		return registrationBean;
	}
}
