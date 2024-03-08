import axios from 'axios';

type FitnessStatisticsBody = {
  chromosomes: Array<Chromosome>
  n: number
}


type generatePopulationRes = {
  data: Chromosome[]
}

type FitnessStatisticsRes = {
    data: {
      fitness: number,
      percentage: number
    } []
}

export const generatePopulation = async (data: Object): Promise<Chromosome[]> => {
  return (await axios.post('http://localhost:8080/api/v1/population', data)).data;
}

export const fitnessStatistics = async (data: FitnessStatisticsBody): Promise<FitnessStatisticsRes>  => {
  console.log(data)
  return await axios.post('http://localhost:8080/api/v1/fitnessstatistics', data);
}

export const selection = async (data: FitnessStatisticsBody): Promise<Array<Chromosome>> => {
  return (await axios.post('http://localhost:8080/api/v1/selection', data)).data;
}