package br.unisul.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Analise implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 3000) 
	private String textoAnalise;
	
	private Integer estrelas;
	
	@ManyToOne
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name = "provedor_id")
	private Provedor provedor;
	
	public Analise(Integer id, String textoAnalise, Integer estrelas) {
		this.id = id;
		this.textoAnalise = textoAnalise;
		this.estrelas = estrelas;
	}
	
	public Analise(Analise a) {
		this.id = a.getId();
		this.textoAnalise = a.getTextoAnalise();
		this.estrelas = a.getEstrelas();
	}

}
