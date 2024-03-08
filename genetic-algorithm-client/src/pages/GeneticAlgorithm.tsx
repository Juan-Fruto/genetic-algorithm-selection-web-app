import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generatePopulation, selection } from '../api/geneticAlgorithm';

interface GeneticAlgorithmState {
  numberOfChromosomes: number;
  chromosomeLength: number;
  newGenerationLength: number;
  generatedData: any[]; 
  selectedData: any[]; 
}

const GeneticAlgorithm: React.FC = () => {
  const [numberOfChromosomes, setNumberOfChromosomes] = useState<number>(0);
  const [chromosomeLength, setChromosomeLength] = useState<number>(0);
  const [newGenerationLength, setNewGenerationLength] = useState<number>(0);
  const [generatedData, setGeneratedData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleNumberOfChromosomesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfChromosomes(parseInt(event.target.value));
  }

  const handleChromosomeLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChromosomeLength(parseInt(event.target.value));
  }

  const handleNewGenerationLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGenerationLength(parseInt(event.target.value));
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const generatedPopulation = await generatePopulation({
      numberOfCrom: numberOfChromosomes,
      length: chromosomeLength
    });
    setGeneratedData(generatedPopulation);
  }

  const handleApplySelection = async(event: React.FormEvent) => {
    event.preventDefault();
    const selectedChromosomes = await selection({
      chromosomes: generatedData,
      n: newGenerationLength
    });
    setSelectedData(selectedChromosomes);
  }

  useEffect(() => {
  }, []);

  return (
    <div className="genetic-algorithm">
      <div className="table-container">
        <div className="top-left">
          <form className="form-container " onSubmit={handleSubmit}>
            <label>
              Number of Chromosomes:
              <input type="number" value={numberOfChromosomes} onChange={handleNumberOfChromosomesChange}/>
            </label>
            <label>
              Chromosome Length:
              <input type="number" value={chromosomeLength} onChange={handleChromosomeLengthChange} />
            </label>
            <button type="submit">Generate</button>
          </form>
        </div>
        <div className="top-right">
          <form className="form-container " onSubmit={handleApplySelection}>
            <label>
              New generation length:
              <input type="number" value={newGenerationLength} onChange={handleNewGenerationLengthChange} />
            </label>
            <button type="submit">Apply Selection</button>
          </form>
        </div>
      </div>
      <div className="table-container">
        <div className="bottom-left">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Chromosome</th>
                <th>Fitness</th>
              </tr>
            </thead>
            <tbody>
              {generatedData.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{item.value}</th>
                  <th>{item.fitness}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{background:'blueviolet'}} onClick={() => {
            navigate("/statistics");
            localStorage.setItem("data", JSON.stringify(generatedData));
          }}>Visualize pie graph</button>
        </div>
        <div className="bottom-right">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Chromosome</th>
                <th>Fitness</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{item.value}</th>
                  <th>{item.fitness}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{background:'blueviolet'}} onClick={() => {
            navigate("/statistics");
            localStorage.setItem("data", JSON.stringify(selectedData));
          }}>Visualize pie graph</button>
        </div>
      </div>
    </div>
  );
}

export default GeneticAlgorithm;
