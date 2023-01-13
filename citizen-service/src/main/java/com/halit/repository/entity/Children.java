package com.halit.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "tbl_children")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Children {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 64)
    private String name;
    @JsonIgnore
    @ManyToOne
//    @JoinColumn(name = "parent_id" ,referencedColumnName = "id")
    private Citizens citizens;

}
