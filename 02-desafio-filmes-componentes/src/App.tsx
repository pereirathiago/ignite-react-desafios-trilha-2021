import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { useEffect, useState } from 'react';
import { api } from './services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} />
      <Content selectedGenreId={selectedGenreId} />
      
    </div>
  )
}