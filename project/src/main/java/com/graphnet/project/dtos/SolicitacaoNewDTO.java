package com.graphnet.project.dtos;

import java.io.Serializable;

import com.graphnet.project.domain.Cliente;

public class SolicitacaoNewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Cliente cliente;

	public SolicitacaoNewDTO() {

	}

	public SolicitacaoNewDTO(SolicitacaoNewDTO obj) {

	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}