package org.ici.genenticalgorithmapi.data.request.geneticAlgorithmRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.ici.genenticalgorithmapi.data.model.Chromosome;

import java.util.List;

@NoArgsConstructor
@Setter
@Getter
public class SelectionRequestBody {

    private List<Chromosome> chromosomes;
    private int n;

}
