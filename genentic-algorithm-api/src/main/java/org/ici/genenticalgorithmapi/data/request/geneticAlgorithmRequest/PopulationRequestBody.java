package org.ici.genenticalgorithmapi.data.request.geneticAlgorithmRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class PopulationRequestBody {

    private int numberOfCrom;
    private int length;

}
