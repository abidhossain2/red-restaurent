import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakFast from './Pages/BreakFast/BreakFast';
import Dinner from './Pages/Dinner/Dinner';
import Lunch from './Pages/Lunch/Lunch';
import Header from './Pages/Header/Header'
import { createContext, useState } from 'react';
import BreakFastDetail from './Pages/BreakFastDetail/BreakFastDetail';
import LunchDetail from './Pages/LunchDetail/LunchDetail';

export const FoodContext = createContext();
function App() {
  const [breakfastFoods, setBreakFastFoods] = useState([]);
  const [lunchFoods, setLunchFoods] = useState([])
  return (
    <FoodContext.Provider value={[breakfastFoods, setBreakFastFoods, lunchFoods, setLunchFoods]}>
      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/breakfastItem/:id' element={<BreakFastDetail></BreakFastDetail>} />
        <Route path='/lunchItem/:id' element={<LunchDetail></LunchDetail>}></Route>
      </Routes>
    </FoodContext.Provider>
  );
}

export default App;
