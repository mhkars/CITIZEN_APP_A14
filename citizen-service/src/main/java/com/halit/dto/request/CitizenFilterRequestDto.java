package com.halit.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CitizenFilterRequestDto {
    Long id;
    String name;
    Boolean isCitizen;
    Boolean hasDrivingLicense;
}
