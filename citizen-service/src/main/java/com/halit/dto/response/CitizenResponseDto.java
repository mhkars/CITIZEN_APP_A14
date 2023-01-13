package com.halit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CitizenResponseDto {

    Long id;
    String name;
    Boolean isCitizen;
    int numberOfChildren;
    Boolean hasDrivingLicense;
}
