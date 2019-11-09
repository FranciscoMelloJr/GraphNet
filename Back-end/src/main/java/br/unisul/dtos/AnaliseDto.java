package br.unisul.dtos;

import br.unisul.domain.Analise;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnaliseDto {

	private Integer id;
	
	private String cpf;
	private String cnpj;
	private String textoAnalise;
	
	public AnaliseDto(Analise analise) {
		this.cpf = analise.getCpf();
		this.cnpj = analise.getCnpj();
		this.textoAnalise = analise.getTextoAnalise();
	}
}
