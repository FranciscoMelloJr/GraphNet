package com.graphnet.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.graphnet.project.domain.Cto;

@Repository
public interface CtoRepository extends JpaRepository<Cto, Integer> {

}
