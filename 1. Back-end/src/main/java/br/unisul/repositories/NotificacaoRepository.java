package br.unisul.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.unisul.domain.Notificacao;

public interface NotificacaoRepository extends JpaRepository<Notificacao, Integer> {

}
