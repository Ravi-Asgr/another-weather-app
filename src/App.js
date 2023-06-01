import styles from './css/home.module.css'
import { MainCard } from './components/maincard/maincard';
import { ContentBox } from './components/contentbox/contentbox';
import { Header } from './components/header/header'
import { DateTime } from './components/datetime/datetime';
import { Search } from './components/search/search';
import { MetricsBox } from './components/metricsbox/metricsbox';
import { UnitSearch } from './components/unitsearch/unitsearch';
import { ToggleBox } from './components/togglebox/togglebox';

function App() {


  return (
    <>
    <div className={styles.wrapper}>
      <ToggleBox />  
    </div>

    <div className={styles.wrapper}>
      <MainCard />
      <ContentBox>
        <Header>
          <DateTime />
          <Search placeHolder="Search a city..." value='cityInput'/>
        </Header>
        <MetricsBox />
        <UnitSearch unitSystem={'metric'} />
      </ContentBox>
    </div>
    </>
  );
}

export default App;
