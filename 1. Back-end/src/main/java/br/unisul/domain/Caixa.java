package br.unisul.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Caixa implements Serializable {
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String nome;	
	
	private String longitude;
	private String latitude;
	
	private ArrayList<Integer> vinculos = new ArrayList<Integer>();
	
	@OneToMany (mappedBy="caixa")
	private List<Solicitacao> solicitacoes = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "provedor_id")
	private Provedor provedor;
	
	public Caixa(Integer id, String nome, String longitude, String latitude) {
		this.id = id;
		this.nome = nome;
		this.longitude = longitude;
		this.latitude = latitude;
	}
	
}
