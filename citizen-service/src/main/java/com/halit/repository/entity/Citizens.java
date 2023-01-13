package com.halit.repository.entity;

import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_citizens")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Citizens {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 64)
    private String name;
    private Boolean isCitizen;
    private Boolean hasDrivingLicense;
    @OneToMany(mappedBy = "citizens")
    private List<Children> childrenList;

}
