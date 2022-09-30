import type { NextPage } from "next";
import Head from "next/head";
import ART from "data/art.json";
import Art from '../components/Art'

import { ArtType } from '../components/Art.types'

import { useCallback, useState, FormEvent } from 'react'

const Home: NextPage = () => {

  const [filteredArts, setFilteredArts] = useState<Array<ArtType> >([])

  const onSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const pattern = formData.get("search")!.toString().trim().toLowerCase()
    console.log(pattern)
    setFilteredArts(ART.data.filter(item => 
      item.artist.toLowerCase().includes(pattern) ||
      item.medium.toLowerCase().includes(pattern) || 
      item.description.toLowerCase().includes(pattern)
    ))
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-full max-w-screen-lg">
        <ul className="w-full flex flex-row mt-10 mb-10">
          { ART.data.map((item, index) => <Art { ...item } key={index}/>) }
        </ul>
        <h1>Example App</h1>
        <form onSubmit={onSearch}>
          <input type="search" placeholder="Search…" className="border" name="search" />
        </form>
        <ul className="w-full flex flex-row mt-10 mb-10">
        { filteredArts.map((item, index) => <Art { ...item } key={index}/>) }
        </ul>
      </main>
    </>
  );
};

export default Home;
