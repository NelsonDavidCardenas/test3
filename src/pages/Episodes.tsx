import { fetchRickAndMorty, rickAndMortyEpisodes } from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCardEpisodes from "../components/AntCardEpisodes";
import styles from './character.module.css'

interface EpisodesData {
  results: Array<{
    id: number;
    name: string;
    episode: string;
    species: string
  }>;
}

export const Episodes: React.FC = () => {
  const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
    suspense: false,
  });

  return (
    <>
      <h1>Episodes</h1>

      <div className={styles.container}>
        {data?.results.map((episodes) => (
          <AntCardEpisodes key={episodes.id} name={episodes.name} episode={episodes.episode} ></AntCardEpisodes>

        ))}
      </div>


    </>
  );
};