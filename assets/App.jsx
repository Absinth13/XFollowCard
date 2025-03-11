import "../assets/App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName :'Haku',
    name:'Haku Diaz',
    isFollowing: true
  },

  {
    userName :'Piske',
    name:'Piske Diaz',
    isFollowing: false
  },

  {
    userName :'Ceniza',
    name:'Ceniza Rosas',
    isFollowing: true
  },

  {
    userName :'Kiri',
    name:'Kiri Rosas',
    isFollowing: false
  }


]

export function App (){

    
  return (
        <section className="App">
      {
        users.map (({userName, name, isFollowing} )=> (
        
            <TwitterFollowCard
            key= {userName}
            userName={userName}
            initialIsFollowing={isFollowing} 
            >
              {name} 
            </TwitterFollowCard> 
          ))
        }
     

      
       </section>
    )
}