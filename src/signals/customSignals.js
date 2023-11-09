import {
    signal,
    computed
  } from "@preact/signals-react";

export const filter = signal("");

export const filterData = (data) => {
    const searchFilter = filter.value.toLowerCase();

    const filteredData = computed(
        () =>
          (data ?? []).filter(
            (movie) =>
              movie.title.toLowerCase().includes(searchFilter) ||
              movie.genre.toLowerCase().includes(searchFilter) ||
              movie.description.toLowerCase().includes(searchFilter) ||
              movie.director.toLowerCase().includes(searchFilter) ||
              movie.actors.toLowerCase().includes(searchFilter) ||
              movie.year.toString().includes(searchFilter) ||
              movie.runtime.toString().includes(searchFilter) ||
              movie['imdb rating'].toString().includes(searchFilter) ||
              movie['meta score'].toString().includes(searchFilter)
          ) ?? []
      );

    return filteredData;
}

export const options = (genres) => {
  const genreOptions = computed(
      () =>
        (genres ?? []).map(
          (item) => {
            return {value: item.genre.toLowerCase(), label: item.genre}
          }
        ) ?? []
    );
    
  return genreOptions;
}
