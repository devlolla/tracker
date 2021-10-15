import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"

export const Dashboard = () => {
  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-xl flex items-center justify-between h-1/6">
        <span className="font-bold text-2xl">Expanse Tracker</span>
        <nav className="flex gap-4">
          <Button> Adicionar nova conta</Button>
          <Button variant='ghost'> Sair </Button>
        </nav>

      </header>
    </TemplateContainer>
  )
}