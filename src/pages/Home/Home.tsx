import { Play } from 'phosphor-react'

export const Home = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input type="text" id="task" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
