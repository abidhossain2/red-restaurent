import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakFast from './Pages/BreakFast/BreakFast';
import Dinner from './Pages/Dinner/Dinner';
import Lunch from './Pages/Lunch/Lunch';
import Header from './Pages/Header/Header'
import { createContext, useState } from 'react';
import BreakFastDetail from './Pages/BreakFastDetail/BreakFastDetail';
import LunchDetail from './Pages/LunchDetail/LunchDetail';
import DinnerDetail from './Pages/DinnerDetail/DinnerDetail';

export const FoodContext = createContext();
function App() {
  const [breakfastFoods, setBreakFastFoods] = useState([]);
  const [lunchFoods, setLunchFoods] = useState([])
  const [dinnerFoods, setDinnerFoods] = useState([])
  return (
    <FoodContext.Provider value={[breakfastFoods, setBreakFastFoods, lunchFoods, setLunchFoods,dinnerFoods, setDinnerFoods]}>
      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/breakfastItem/:id' element={<BreakFastDetail></BreakFastDetail>} />
        <Route path='/lunchItem/:id' element={<LunchDetail></LunchDetail>}></Route>
        <Route path='/dinnerItem/:id' element={<DinnerDetail></DinnerDetail>}></Route>
      </Routes>
    </FoodContext.Provider>
  );
}

export default App;
