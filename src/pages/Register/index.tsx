import { Button } from "../../components/atoms/Button"
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/Link"
import { SidebarHero } from "../../components/organism/SideBarHero"
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from "../../components/templates"


export const Register = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SidebarHero />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Crie sua conta</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="E-mail:" type="email" />
            <InputText label="Senha:" type="password" />
            <Button disabled> Criar Conta </Button>
          </form>
          <Link href="/"> Já possuo uma conta </Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
