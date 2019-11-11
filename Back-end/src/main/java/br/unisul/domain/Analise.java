package br.unisul.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Analise implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String textoAnalise;
	
	private Integer estrelas;
	
	@OneToOne
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name = "provedor_id")
	private Provedor provedor;

}
