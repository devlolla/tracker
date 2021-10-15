import { CardContainer, Tag } from './styles'
import { Button } from "../../../../components/atoms/Button"

export const Card = ({ title, category, price }) => {
  return (
    <CardContainer>
      <h2 className="font-bold text-xl ">
        {title}
      </h2>
      <Tag> {category} </Tag>
      <p className="font-medium ">{price}</p>
      <footer className="w-full flex justify-between">
        <Button variant="ghost">
          Editar
        </Button>
        <Button variant="ghost">
          Excluir
        </Button>
      </footer>
    </CardContainer>
  )
}

