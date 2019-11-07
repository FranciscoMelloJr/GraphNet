package com.graphnet.project.dtos;

import java.io.Serializable;

import com.graphnet.project.domain.Cto;

public class CtoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer nome;
	private Integer tipo;

	public CtoDTO() {

	}

	public CtoDTO(Cto obj) {
		id = obj.getId();
		nome = obj.getNome();
		tipo = obj.getCTO().getCod();
	}

	public CtoDTO(Integer id, Integer nome, Integer tipo) {
		super();
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNome() {
		return nome;
	}

	public void setNome(Integer nome) {
		this.nome = nome;
	}

	public Integer getTipo() {
		return tipo;
	}

	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}

}
