package com.graphnet.project.dtos;

import java.io.Serializable;

public class CtoNewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String nome;
	private Integer tipo;

	public CtoNewDTO() {
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getTipo() {
		return tipo;
	}

	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}

}
