import requests from '../../api/request';

export const RowList = [
  {
    key: 0,
    id: 'HOT',
    title: '놓칠 수 없는 인기작',
    fetchUrl: requests.fetchTrending,
  },
  {
    key: 1,
    id: 'Top',
    title: 'TOP 20 영화',
    fetchUrl: requests.fetchTopRated,
  },
  {
    key: 2,
    id: 'Action',
    title: '긴박감 넘치는 액션',
    fetchUrl: requests.fetchActionMovies,
  },
  {
    key: 3,
    id: 'Comedy',
    title: '익살스러운 코메디',
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    key: 4,
    id: 'Horror',
    title: '으스스하고 소름끼치는 호러',
    fetchUrl: requests.fetchHorrorMovies,
  },
  {
    key: 5,
    id: 'Romance',
    title: '두근두근 설렘주의 로맨스',
    fetchUrl: requests.fetchRomanceMovies,
  },
  {
    key: 6,
    id: 'Dacumentaries',
    title: '살아있는 현장, 다큐멘터리',
    fetchUrl: requests.fetchDocumentaries,
  },
];
