import React from 'react';
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import ProfileBoxWrapper from '../src/components/ProfileRelations'


function ProfileSideBar(props){
  return (
    <Box as="aside" >
    <img src={`https://github.com/${props.gitHubUser}.png`} style={{borderRadius: '8px'}} />
    <hr />
    <p>
    <a className="boxLink" href={`https://github.com/${props.gitHubUser}`}  >
      @{props.gitHubUser}
    </a>
    </p>
    <hr />
    <AlurakutProfileSidebarMenuDefault/>
   </Box>
  );
}

export default function Home() {
  const gitHubUser =  "guilhermegga";
  React.useState([]);
  const gitHubFriends = ['joaopnj', 'igorcaldeira','juunegreiros','peas',]
  const [comunidades, setComunidades] = React.useState([{
    id : new Date().toISOString,
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  return (
    <>
    <AlurakutMenu githubUser={gitHubUser}/>
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
       <ProfileSideBar gitHubUser={gitHubUser} />
      </div>
      <div  className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box >
         <h1 className="title">
           Bem vindo(a)
         </h1>
         <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className="subTitle">O que voce deseja fazer?</h2>
          <form onSubmit={function handleCreateCommunity(e){
              e.preventDefault();
              const dadosForm = new FormData(e.target)
              const comunidade = {
                id : new Date().toISOString,
                title: dadosForm.get('title'),
                image: dadosForm.get('image')
              }
             const newComunidades = [...comunidades,comunidade];
             setComunidades(newComunidades);
          }}>
           <div>
              <input
                placeholder="Qual o nome da comunidade?"
                name="title"
                aria-label="Qual o nome da comunidade?"
                type="text"
              />
                <input
                placeholder="Qual o imagem da comunidade?"
                name="image"
                aria-label="Qual o imagem da comunidade?"
                type="text"
              />
           </div>
           <button>
             Criar comunidade
          </button>  
          </form>
        </Box>
      </div>
      <div  className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileBoxWrapper>
          <h2 className="smallTitle">
           Amigos ({gitHubFriends.length})
          </h2>
          <ul>
              {gitHubFriends.map((p) =>{
                return(
                  <li  key={p}>
                    <a href={`/users/${p}`}>
                      <img src={`https://github.com/${p}.png`} />
                      <span>{p}</span> 
                    </a>   
                  </li>    
                )
              })}
         </ul>
        </ProfileBoxWrapper>
        <ProfileBoxWrapper>
          <h2 className="smallTitle">
            Comunidades ({comunidades.length})
          </h2>
          <ul>
              {comunidades.map((c) =>{
                return(
                  <li key={c.id}>
                    <a href={`/users/${c.title}`} >
                      <img src={c.image} />
                      <span>{c.title}</span> 
                    </a>   
                  </li>    
                )
              })}
         </ul>
        </ProfileBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
