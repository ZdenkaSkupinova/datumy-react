import './style.css';
import { Today } from '../../Components/Today';

export const HomePage = () => {
  return (
    <div className="container">
   <>
      <Today day={"07"} month={"12"} year={"2020"}/>
      <br/>
      <Today day={"15"} month={"09"} year={"2024"}/>
      <br/>
      <Today day={"31"} month={"01"} year={"1990"}/>
   </>
    </div>
  );
};
