package com.graphnet.project.config;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.graphnet.project.services.DbService;

@Configuration
public class DevConfig {

	@Autowired
	private DbService dbService;

	@Value("${spring.jpa.hibernate.ddl-auto}")
	private String strategy;

	@Bean
	public boolean inicializaBancoDeDados() throws ParseException {
		if (!"create".equals(strategy)) {
			return false;
		}
		dbService.inicializaBancoDeDados();
		return true;
	}
}
