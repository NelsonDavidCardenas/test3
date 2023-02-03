import { fetchRickAndMorty, rickAndMortyLocalizations } from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCardLocalizations from "../components/AntCardLocalizations";
import styles from './character.module.css'

interface LocalizationsData {
    results: Array<{
        id: number;
        name: string;
        type: string;
        image: string
    }>;
}

export const Localizations: React.FC = () => {
    const { data } = useSWR<LocalizationsData>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data?.results.map((localizations) => (
                    <AntCardLocalizations key={localizations.id} name={localizations.name} description={localizations.type} image={localizations.image}></AntCardLocalizations>
                ))}
            </div>


        </>
    );
};

