'use client'

import styles from "./page.module.css";
import { Column } from "@/components/Column";
import { Card } from "@/components/Card";
import Flex from "@/components/Flex";
import { Header } from "@/components/Header";
import { TextField } from "@/components/TextField";
import { DatePicker } from "@/components/DatePicker";
import { MultiSelect } from "@/components/MultiSelect";
import { useData } from "@/hooks/useData";
import { KanbanCard } from "./components/KanbanCard";
import NiceModal from "@ebay/nice-modal-react";

function Board() {
  const data = useData()

  return (
    <div className={styles.page}>
      <Header>
        <TextField
          label={'Busca textual'}
          size="small"
          value={data.search}
          onChange={data.setSearch}
        />
        <DatePicker
          label="Data de execução"
          value={data.date}
          onChange={data.setDate}
        />
        <MultiSelect
          label="Prioridade"
          selected={data.priority}
          onChange={data.setPriority}
          options={[
            { value: 'low', label: 'Baixa' },
            { value: 'high', label: 'Alta' },
            { value: 'critical', label: 'Crítica' },
          ]}
        />
        </Header>
      <main className={styles.main}>
        <Flex height="100%" direction="row">
          <Column title="TODO">
            {data.tasks.todo.map((task) => 
              <KanbanCard {...task} key={`${task.date}-${task.description}`} />)
            }
          </Column>
          <Column title="DOING">
            {data.tasks.doing.map((task) => 
              <KanbanCard {...task} key={`${task.date}-${task.description}`} />)
            }
          </Column>
          <Column title="DONE">
            {data.tasks.done.map((task) => 
              <KanbanCard {...task} key={`${task.date}-${task.description}`} />)
            }
          </Column>
        </Flex>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <NiceModal.Provider>
      <Board/>
    </NiceModal.Provider>
  )
}
