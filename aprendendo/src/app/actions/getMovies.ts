"use server"

export async function getMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzhkMzdlMGQ0ZTExYjY5ZWM1ZDQ0NDFjNGEyZDJjMiIsIm5iZiI6MTcyMTQwMzM4MS4zNTQzNTgsInN1YiI6IjY2OWE4NjAxZmViMTZkMGM2YmY4MTc5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oDwayTcqPpKmyBlyN1wgKE9a-YTjIx1m_RiosmJAeU0'
        }
    };
      //fetch tem o parametro inicial de uma url da API e em segundo options (Configuração do pedido da API - Metodo GET(comunicação), aceite a comunicação via Json e autorização via token)
      const resp =  await fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)
     
      if (resp.ok){
        const json = await resp.json() 
        return json.results
  }
}