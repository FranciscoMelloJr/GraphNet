package br.unisul.dtos;

import java.io.Serializable;
import java.util.Date;

import br.unisul.domain.Solicitacao;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class SolicitacaoDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	private String status;	

	private Date data;
	
	public SolicitacaoDTO(Integer id, String status) {
		this.id = id;
		this.status = status;
	}
		
	public SolicitacaoDTO(Solicitacao s) {
		id = s.getId();
		status = s.getStatus();
	}

}
		