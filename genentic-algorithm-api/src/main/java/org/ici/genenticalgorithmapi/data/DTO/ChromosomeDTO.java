package org.ici.genenticalgorithmapi.data.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ChromosomeDTO<F, S> {

    private final F fitness;
    private final S percentage;

    public ChromosomeDTO(F fitness, S percentage) {
        this.fitness = fitness;
        this.percentage = percentage;
    }

}
