'use client'

import dayjs from "dayjs";
import React from "react";

const DATA = {
  todo: [
    { id: '1', title: 'Tarefa 1', description: 'Descrição', date: new Date(), priority: 'low' },
    { id: '2', title: 'Tarefa 1', description: 'Descrição', date: new Date(), priority: 'critical' },
  ],
  doing: [
    { id: '3', title: 'Tarefa 2', description: 'Descrição', date: new Date(), priority: 'high' },
    { id: '4', title: 'Tarefa 5', description: 'Descrição', date: new Date(), priority: 'critical' },
    { id: '5', title: 'Tarefa 6', description: 'Descrição', date: new Date(), priority: 'high' }
  ],
  done: [{ id: '6', title: 'Tarefa 3', description: 'Descrição', date: new Date(), priority: 'low' }],
} as const;


export function useData() {
  const [priority, setPriority] = React.useState<Array<string>>([])
  const [date, setDate] = React.useState(new Date())
  const [search, setSearch] = React.useState<string | undefined>()

  const searchICase = search?.toLowerCase() 

  const priorityFilteredData = {
    todo: DATA.todo.filter(task => !priority.length || priority.includes(task.priority)),
    doing: DATA.doing.filter(task => !priority.length || priority.includes(task.priority)),
    done: DATA.done.filter(task => !priority.length || priority.includes(task.priority)),
  }
  
  const dateFilteredData = {
    todo: priorityFilteredData.todo.filter(task => dayjs(task.date).isSame(date, 'date')),
    doing: priorityFilteredData.doing.filter(task => dayjs(task.date).isSame(date, 'date')),
    done: priorityFilteredData.done.filter(task => dayjs(task.date).isSame(date, 'date')),
  }
  
  const searchFilteredData = {
    todo: dateFilteredData.todo.filter(
      task => !searchICase
        || task.title.toLowerCase().includes(searchICase) 
        || task.description.toLowerCase().includes(searchICase)
      ),
    doing: dateFilteredData.doing.filter(
      task => !searchICase
      || task.title.toLowerCase().includes(searchICase) 
      || task.description.toLowerCase().includes(searchICase)
    ),
    done: dateFilteredData.done.filter(
      task => !searchICase
      || task.title.toLowerCase().includes(searchICase)
      || task.description.toLowerCase().includes(searchICase)
    ),
  }
  
  return {
    priority,
    setPriority,
    date,
    setDate,
    search,
    setSearch,
    tasks: searchFilteredData,
  }
}