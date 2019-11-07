package br.unisul.dtos;

import java.io.Serializable;

import br.unisul.domain.Solicitacao;

public class SolicitacaoDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	private String status;	
	
	public SolicitacaoDTO() {}

	public SolicitacaoDTO(Integer id, String status) {
		this.id = id;
		this.status = status;
	}
		
	public SolicitacaoDTO(Solicitacao s) {
		id = s.getId();
		status = s.getStatus();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
		