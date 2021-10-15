import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"
import { Card } from "./components/Card"

export const Dashboard = () => {

  const array = [
    { id: "0", title: "Netflix", category: "Streamming", price: 39.99 },
    { id: "1", title: "Amazon", category: "Streamming", price: 9.99 },
    { id: "2", title: "Spotify", category: "Streamming", price: 9.99 },
    { id: "3", title: "Internet", category: "Web", price: 79.99 },
  ]

  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-xl flex items-center justify-between h-1/6">
        <span className="font-bold text-2xl">Expanse Tracker</span>
        <nav className="flex gap-4">
          <Button> Adicionar nova conta</Button>
          <Button variant='ghost'> Sair </Button>
        </nav>
      </header>

      <main className="w-full bg-purple-50 max-w-screen-xl h-5/6 grid content-start overflow-y-scroll grid-cols-3 gap-4 p-4 ">
        {array.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        ))}
      </main>
    </TemplateContainer>
  )
}