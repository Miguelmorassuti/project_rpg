package com.project.ficha;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import com.project.ficha.model.FichaModel;
import com.project.ficha.repository.FichaRepository; 

@SpringBootApplication(scanBasePackageClasses = { FichaApplication.class }, exclude = {ErrorMvcAutoConfiguration.class, SecurityAutoConfiguration.class})
@EnableJpaRepositories(basePackageClasses = { FichaRepository.class })
@EntityScan(basePackageClasses = { FichaModel.class })
@EnableAsync
@EnableScheduling
@EnableWebMvc
public class FichaApplication extends SpringBootServletInitializer {

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(FichaApplication.class, args);

	}

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(FichaApplication.class);
	}
}
