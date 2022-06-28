import { useState } from 'react';
import TaskContainer from "./components/TaskContainer/Index";
import TaskItem from "./components/TaskItem";
import './components/Styles/global.css'
import Main from './components/Styles';
import Botton from './components/Botton';

interface Tarefa {
  titulo: string;
  done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tituloTarefa, setTituloTarefa] = useState<string>('')

  function adicionarTarefa() {
    setTarefas([
      ...tarefas,
      {
        titulo: tituloTarefa,
        done: false,
      },
    ]);
    setTituloTarefa('');
  }

function concluirTarefa(posicao: number) {
  const novaLista = [...tarefas];

  novaLista[posicao].done = true;

  setTarefas(novaLista);
}

  return (
    <main className="container">
      <Main />
      <div className="new-task">
        <input type="text" onChange={(event) =>setTituloTarefa(event.target.value) }  value={tituloTarefa} />
    <Botton text="add" cor="success" action={adicionarTarefa}/>
      </div>
      <TaskContainer>
          {tarefas.map((tarefa: Tarefa, posicao:number) => {
            return (
              <TaskItem 
              titulo={tarefa.titulo} 
              done={tarefa.done} 
              concluirTarefa={ () => concluirTarefa(posicao)} />
            );
          })
        }

      </TaskContainer>
    </main>
  );
}

export default App;
