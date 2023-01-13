package com.halit.repository;

import com.halit.repository.entity.Children;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IChildrenRepository extends JpaRepository<Children,Long> {
    Optional<Children> findOptionalById(Long id);
}

