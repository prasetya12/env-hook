import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList';

import Counter from './components/Counter'
import Home from './components/Home'
import Register from './components/Register'

function App() {


  console.log(process.env, 'halo')


  return (
    <div className="App" style={{ paddingTop: 30 }} >
      <Register />
      {/* <Counter /> */}
      {/* <Home /> */}
      {/* <UserList
        name={"Rizal"}
        age={10}
        isAdmin={false}
        location={{
          province: "Yogyakarta",
          city: "Jogja"
        }}
        dataNilai={[10, 8, 7, "9"]} /> */}
      {/* {dataProduct.map((item) => (<div>{item.title}</div>))} */}
    </div>
  );
}

export default App;
