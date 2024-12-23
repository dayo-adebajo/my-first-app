import './App.css';
import Card from './components/Card';
import Users from './components/Users';
import {users} from '../src/data';

function App() {
  return (
    <div>
      <h1>List of Users</h1>
      
        {
          users.map((user) => {
            return (
              <Card>
                <Users name={user.name} job={user.job} />
                </Card>  )
          })
        }
      
     

      {/**/}
    </div>
  );
}

export default App;
