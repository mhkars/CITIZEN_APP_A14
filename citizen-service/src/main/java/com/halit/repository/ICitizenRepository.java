package com.halit.repository;

import com.halit.repository.entity.Citizens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICitizenRepository extends JpaRepository<Citizens,Long> {
    Optional<Citizens> findOptionalById(Long id);

}
