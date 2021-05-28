export const getAllEpisodes = async () => {
    const response = await fetch("http://api.tvmaze.com/shows/431/episodes");
    const data = await response.json()
    return data;
}