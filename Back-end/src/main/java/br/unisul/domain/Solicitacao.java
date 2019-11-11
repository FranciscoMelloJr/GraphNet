package br.unisul.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Solicitacao implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String status;	
	
	private Date data;

	private Integer addCaixa;
	
	@ManyToOne
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name = "provedor_id")
	private Provedor provedor;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "caixa_id")
	private Caixa caixa;
	
	public Solicitacao(Integer id, String status) {
		this.id = id;
		this.status = status;
	}
		
	public Solicitacao(Solicitacao s) {
		id = s.getId();
		status = s.getStatus();
	}

}
		